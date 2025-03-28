import React from "react";

const Filter = () => {
  return (
    <div className="w-[70%] mt-[16px] border-b border-gray-300 flex justify-between text-gray-600">
      <div className="flex space-x-8 text-[17px] font-[450] pb-[16px]">
        <h4>Collection</h4>
        <h4>All smallcases</h4>
        <h4>Mangers</h4>
      </div>
      <div className=" flex space-x-4">
        <div className="dropdown w-[240px] border-b">
          <div
            tabIndex={0}
            role="button"
            className="pt-1 border-none cursor-pointer px-3 flex justify-between"
          >
            <span>Sort By Popularity</span>
            <span>^</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <label className="flex items-center gap-2 px-3 py-2  bg-gray-100 border-b">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            required
            placeholder="Search"
            className="bg-transparent w-full border-none outline-none focus:ring-0"
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;
