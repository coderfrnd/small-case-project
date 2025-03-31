import React from "react";

const LaunchDate = ({
  props,
  under,
  ruppess,
  handleStartgey,
  ind,
  checked = false,
}) => {
  return (
    <div className="mt-1 cursor-pointer  pl-0 hover:bg-gray-200 w-[70%] p-1 rounded ">
      <ul className="">
        <li className="flex space-x-1">
          <input
            type="checkbox"
            id={ind}
            onChange={() => handleStartgey(under)}
            checked={checked}
            className="h-[15px] w-[15px] border border-gray-200 mt-[1px] ml-1"
          />
          <label htmlFor={ind}>
            <p className="text-sm text-nowrap text-gray-500 font-medium cursor-pointer  ">
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
