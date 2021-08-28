import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import EpisodeList from "../../Components/EpisodeList/EpisodeList";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";

const EpisodeListPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [paginateArray, setPaginateArray] = useState([]);

  const GET_EPISODE_LIST = gql`
    query epiList {
      episodes (page: ${pageNum}) {
        info {
          count
          pages
          next
          prev
        }
        results {
        id
        name
        episode
      }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_EPISODE_LIST);

  useEffect(() => {
    if (data) {
      const { pages, next, prev } = data.episodes.info;

      const paginateArr = [];
      for (let i = 1; i <= pages; i++) {
        paginateArr.push(i);
      }

      setPrevPage(prev);
      setNextPage(next);
      setTotalPage(pages);
      setPaginateArray(paginateArr);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <NavigationBar />

      <main>
        <EpisodeList
          heading="Episodes"
          loading={loading}
          error={error}
          data={data}
        />
      </main>

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
      <Footer />
    </>
  );
};

export default EpisodeListPage;
