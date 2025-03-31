import React, { useContext } from "react";
import { StrategyData } from "../../App";

const FilterCount = ({}) => {
  let { setfilterMethod, filterMethod, totalApplyFilterCount, filterStratgey } =
    useContext(StrategyData);

  function handleClearFilter() {
    setfilterMethod(filterStratgey);
  }
  return (
    <>
      <div className="border-b border-gray-300 pb-4 flex justify-between text-[14px] w-[90%]">
        <div className="flex space-x-2 font-semibold text-gray-500">
          <span>Filters</span>
          <span className="bg-gray-200 px-2">{totalApplyFilterCount}</span>
        </div>
        <span
          className="cursor-pointer text-blue-500 font-semibold "
          onClick={handleClearFilter}
        >
          Clear All
        </span>
      </div>
    </>
  );
};

export default FilterCount;
