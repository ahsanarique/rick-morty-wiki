import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SingleCharacter from "../../Components/SingleCharacter/SingleCharacter";
import EpisodeList from "../../Components/EpisodeList/EpisodeList";
import Footer from "../../Components/Footer/Footer";

const SingleCharacterPage = () => {
  const { id } = useParams();

  const GET_SINGLE_CHARACTER = gql`
    query singleChar {
      character(id: ${id}) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          episode
          name
        }
        created
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_SINGLE_CHARACTER);

  return (
    <>
      <NavigationBar />
      <main>
        <SingleCharacter loading={loading} error={error} data={data} />
        <EpisodeList
          heading="Appeared in"
          loading={loading}
          error={error}
          data={data}
        />
      </main>
      <Footer />
    </>
  );
};

export default SingleCharacterPage;
