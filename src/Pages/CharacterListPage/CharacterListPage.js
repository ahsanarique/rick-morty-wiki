// Libraries
import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

// Components
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";

const CharacterListPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [paginateArray, setPaginateArray] = useState([]);

  const GET_CHARACTER_LIST = gql`
    query charList {
      characters(page: ${pageNum}) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          image
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTER_LIST);

  useEffect(() => {
    if (data) {
      const { pages, next, prev } = data.characters.info;

      const paginateArr = [];
      for (let i = 1; i <= pages; i++) {
        paginateArr.push(i);
      }

      setPrevPage(prev);
      setNextPage(next);
      setTotalPage(pages);
      setPaginateArray(paginateArr);
    }
  }, [data]);

  return (
    <>
      <NavigationBar />
      <main>
        <CharacterList
          heading="Character List"
          loading={loading}
          error={error}
          data={data}
        />
        {totalPage > 1 && (
          <nav className="flex flex-wrap justify-center px-4 mt-10">
            {paginateArray.map((page) => (
              <Pagination
                key={page}
                page={page}
                prev={prevPage}
                next={nextPage}
                setPageNum={setPageNum}
              />
            ))}
          </nav>
        )}
      </main>

      <Footer />
    </>
  );
};

export default CharacterListPage;
