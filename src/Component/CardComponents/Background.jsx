import React from "react";
import CardHolder from "./CardHolder";
import SideSectionFilter from "../SideSection/SideSectionFilter";
import FilterMethods from "../Functions/FilterMethod";

const Background = ({ data }) => {
  return (
    <>
      {/* <FilterMethods */}
      <div className="w-[62%] mt-[32px] grid grid-cols-[22%_73%] gap-[5%]">
        <SideSectionFilter />
        <CardHolder data={data} />
      </div>
    </>
  );
};

export default Background;
