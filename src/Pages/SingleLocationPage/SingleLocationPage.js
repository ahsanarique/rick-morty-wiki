import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SingleLocation from "../../Components/SingleLocation/SingleLocation";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Footer from "../../Components/Footer/Footer";

const SingleLocationPage = () => {
  const { id } = useParams();

  const GET_SINGLE_LOCATION = gql`
    query singleLoca {
      location(id: ${id}) {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
        }
        created
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_SINGLE_LOCATION);

  return (
    <>
      <NavigationBar />
      <main>
        <SingleLocation loading={loading} error={error} data={data} />
        <CharacterList
          heading="Residents"
          loading={loading}
          error={error}
          data={data}
        />
      </main>
      <Footer />
    </>
  );
};

export default SingleLocationPage;
