import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

import LoadingMessage from "../LoadingMessage/LoadingMessage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import EpisodeList from "../EpisodeList/EpisodeList";

const SingleCharacter = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [originData, setOriginData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [episodeData, setEpisodeData] = useState([]);

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
          name
        }
        created
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_SINGLE_CHARACTER);

  console.log(data);

  useEffect(() => {
    if (data) {
      setCharacterData(data.character);
      setOriginData(data.character.origin);
      setLocationData(data.character.location);
      setEpisodeData(data.character.episode);
    }
  }, [data]);

  const { name, gender, image, species, status, created } = characterData;

  const date = new Date(created).toUTCString();

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <section className="flex flex-col justify-center items-center p-4 my-10">
      <div className="bg-gray-900 text-gray-200 grid grid-cols-12 gap-4 w-full lg:w-3/4">
        <div className="col-span-12 md:col-span-4 sm:col-span-6 p-2">
          <img className="w-full" src={image} alt="character details" />
        </div>

        <div className="col-span-12 md:col-span-8 sm:col-span-6 py-4 px-2 m-auto">
          <p className="text-2xl font-medium italic">
            Name: <span className="ml-4">{name}</span>
          </p>
          <p className="text-2xl font-medium italic">
            Created: <span className="ml-4">{date}</span>
          </p>
          <p className="text-2xl font-medium italic">
            Gender: <span className="ml-4">{gender}</span>
          </p>
          <p className="text-2xl font-medium italic">
            Origin: <span className="ml-4">{originData.name}</span>
          </p>
          <p className="text-2xl font-medium italic">
            Location: <span className="ml-4">{locationData.name}</span>
          </p>
          <p className="text-2xl font-medium italic">
            Species: <span className="ml-4">{species}</span>
          </p>
          <p className="text-2xl font-medium italic">
            Status: <span className="ml-4">{status}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCharacter;
