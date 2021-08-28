import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header className="bg-gray-900 py-6 sticky top-0">
      <nav className="flex justify-around">
        <Link
          to="/"
          className="text-gray-200 text-center text-2xl font-medium italic hover:text-yellow-200"
        >
          Rick and Morty Wiki
        </Link>
        <div>
          <Link
            to="/characterListPage"
            className="text-gray-200 text-center text-lg font-medium italic mr-4 hover:text-yellow-200"
          >
            Characters
          </Link>
          <Link
            to="/episodeListPage"
            className="text-gray-200 text-center text-lg font-medium italic mr-4 hover:text-yellow-200"
          >
            Episodes
          </Link>
          <Link
            to="/locationListPage"
            className="text-gray-200 text-center text-lg font-medium italic hover:text-yellow-200"
          >
            Locations
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
