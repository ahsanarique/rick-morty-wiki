import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SingleEpisode from "../../Components/SingleEpisode/SingleEpisode";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Footer from "../../Components/Footer/Footer";

const SingleEpisodePage = () => {
  const { id } = useParams();

  const GET_SINGLE_EPISODE = gql`
    query singleEpi {
      episode (id: ${id}) {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_SINGLE_EPISODE);

  return (
    <>
      <NavigationBar />
      <main>
        <SingleEpisode loading={loading} error={error} data={data} />
        <CharacterList
          heading="Characters Appeared in This Episode"
          loading={loading}
          error={error}
          data={data}
        />
      </main>
      <Footer />
    </>
  );
};

export default SingleEpisodePage;
