import React from "react";

const Investment = ({ ruppess, under }) => {
  return (
    <div className="mt-1 cursor-pointer  pl-0 hover:bg-gray-200 w-[70%] p-1 rounded ">
      <ul className="">
        <li className="flex space-x-2">
          <input type="radio" className="h-[15px] w-[15px]" />
          <p className="text-[14px] text-gray-500 font-medium">{under}</p>
          <p className="text-[14px] text-gray-500 font-medium">{ruppess}</p>
        </li>
      </ul>
    </div>
  );
};

export default Investment;
