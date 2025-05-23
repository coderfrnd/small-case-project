import React, { useContext } from "react";
import CardHolder from "./CardHolder";
import SideSectionFilter from "../SideSection/SideSectionFilter";
import { StrategyData } from "../../App";

const Background = () => {
  let { filteredData } = useContext(StrategyData);
  return (
    <>
      <div className="w-[1180px] mt-[32px] grid grid-cols-[22%_73%] gap-[3%]">
        <SideSectionFilter />
        {filteredData.length > 0 ? (
          <CardHolder />
        ) : (
          <h1 className="flex justify-center text-center">
            NO SMALL CASE FOUND
          </h1>
        )}
      </div>
    </>
  );
};

export default Background;
