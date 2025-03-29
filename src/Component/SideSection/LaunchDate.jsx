import React from "react";

const LaunchDate = ({ props, under, ruppess, handleStartgey, ind }) => {
  return (
    <div className="mt-1 cursor-pointer  pl-0 hover:bg-gray-200 w-[70%] p-1 rounded ">
      <ul className="">
        <li className="flex space-x-2">
          <input
            type="checkbox"
            id={ind}
            onClick={(e) => handleStartgey(under)}
            className="h-[15px] w-[15px] border border-gray-200 mt-1 ml-1"
          />
          <label htmlFor={ind}>
            <p className="text-[14px] text-gray-500 font-medium cursor-pointer  ">
              {under}
            </p>
            <p className="text-[14px] text-gray-500 font-medium">{ruppess}</p>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default LaunchDate;
