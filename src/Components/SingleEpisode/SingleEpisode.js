import React from "react";

import LoadingMessage from "../LoadingMessage/LoadingMessage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SingleEpisode = ({ loading, error, data }) => {
  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const { air_date, episode, name } = data.episode;

  return (
    <section className="flex flex-col items-center bg-gray-900 p-4 my-10 text-gray-200 italic w-full lg:w-3/4 md:w-5/6 mx-auto">
      <h2 className="text-3xl text-center border-b-2 border-gray-200 mb-10 pb-4 w-full">
        Episode
      </h2>
      <div className="flex flex-wrap justify-between w-3/4 mb-5">
        <p className="text-2xl">{episode}:</p>
        <p className="text-2xl">{name}</p>
      </div>
      <div className="flex flex-wrap justify-between w-3/4 mb-5">
        <p className="text-2xl">Air Date:</p>
        <p className="text-2xl">{air_date}</p>
      </div>
    </section>
  );
};

export default SingleEpisode;
