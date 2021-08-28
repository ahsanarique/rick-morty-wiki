import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LoadingMessage from "../LoadingMessage/LoadingMessage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SingleCharacter = ({ loading, error, data }) => {
  const [characterData, setCharacterData] = useState({});
  const [originData, setOriginData] = useState({});
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    if (data) {
      setCharacterData(data.character);
      setOriginData(data.character.origin);
      setLocationData(data.character.location);
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
            Origin:{" "}
            <Link
              to={`/singleLocationPage=${locationData.id}`}
              className="ml-4 text-blue-300"
            >
              {originData.name}
            </Link>
          </p>
          <p className="text-2xl font-medium italic">
            Location:{" "}
            <Link
              to={`/singleLocationPage=${locationData.id}`}
              className="ml-4 text-blue-300"
            >
              {locationData.name}
            </Link>
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
