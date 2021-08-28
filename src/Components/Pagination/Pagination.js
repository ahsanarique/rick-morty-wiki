import React from "react";

const Pagination = ({ page, previous, next, setPageNum }) => {
  return (
    <button
      onClick={() => setPageNum(page)}
      className="bg-gray-900 text-gray-200 p-2 m-1 shadow-lg w-12 h-12 hover:bg-yellow-200 hover:text-gray-900"
    >
      {page}
    </button>
  );
};

export default Pagination;
