import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;

    if (showNav) {
      current.classList.remove("hidden");
    }

    return () => current.classList.add("hidden");
  }, [showNav]);

  const smallNavLinkStyle =
    "mb-8 text-lg bg-lightBlue text-gray-200 border-2 w-1/2 border-gray-200 hover:text-yellow-200 hover:border-yellow-200 mx-auto py-3 px-6 rounded-full text-xl";

  return (
    <header className="bg-gray-900 sticky top-0">
      <nav className="flex justify-around py-4">
        <Link
          to="/"
          className="text-gray-200 text-center text-2xl font-medium italic hover:text-yellow-200 p-4 md:p-0"
        >
          Rick and Morty Wiki
        </Link>

        <div className="hidden md:block">
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

        <button
          onClick={() => setShowNav(!showNav)}
          className={`border border-gray-200 rounded-lg block md:hidden`}
        >
          <svg
            className="h-6 w-6 m-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="whitesmoke"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <nav
        ref={ref}
        className="flex flex-col text-center my-16 hidden md:hidden pb-8"
      >
        <Link
          onClick={() => setShowNav(!showNav)}
          to="/characterListPage"
          className={smallNavLinkStyle}
        >
          Characters
        </Link>

        <Link
          onClick={() => setShowNav(!showNav)}
          to="/episodeListPage"
          className={smallNavLinkStyle}
        >
          Episodes
        </Link>

        <Link
          onClick={() => setShowNav(!showNav)}
          to="/locationListPage"
          className={smallNavLinkStyle}
        >
          Locations
        </Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
