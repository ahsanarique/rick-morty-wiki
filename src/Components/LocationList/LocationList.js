import React from "react";
import { Link } from "react-router-dom";

import LoadingMessage from "../LoadingMessage/LoadingMessage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const LocationList = ({ heading, loading, error, data }) => {
  if (loading) return <LoadingMessage />;

  if (error) return <ErrorMessage />;

  const dataSet = data.locations.results;

  return (
    <section className="flex flex-col justify-center text-center text-gray-200 p-4">
      <h1 className="text-4xl border-b-2 border-gray-200 italic pb-4 mb-10">
        {heading}
      </h1>
      <div className="grid grid-cols-12 gap-4">
        {dataSet.map((location) => (
          <Link
            key={location.id}
            to={`/singleLocationPage=${location.id}`}
            className="col-span-12 md:col-span-4 lg:col-span-3 sm:col-span-6 text-center bg-gray-900 p-4 rounded-lg hover:shadow-xl hover:text-yellow-200"
          >
            <h3 className="text-2xl font-medium p-4 italic">{location.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LocationList;
