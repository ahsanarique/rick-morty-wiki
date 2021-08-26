import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header className="bg-gray-900 text-center py-6 sticky top-0">
      <nav>
        <Link
          to="/"
          className="text-gray-200 text-center text-2xl font-medium italic"
        >
          Rick and Morty Wiki
        </Link>
      </nav>
    </header>
  );
};

export default NavigationBar;
