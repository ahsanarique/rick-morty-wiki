import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const mainCategoryClasses =
    "bg-gray-900 col-span-12 md:col-span-6 flex items-center justify-center text-center";
  const categoryHeadingClass =
    "text-6xl text-gray-200 italic border-b-2 border-gray-900 hover:border-gray-200 pb-4";

  return (
    <main className="grid grid-cols-12 gap-4">
      <div className={mainCategoryClasses}>
        <Link to="/characterListPage" className={categoryHeadingClass}>
          Characters
        </Link>
      </div>
      <div className={mainCategoryClasses}>
        <Link to="/episodeListPage" className={categoryHeadingClass}>
          Episodes
        </Link>
      </div>
    </main>
  );
};

export default Homepage;
