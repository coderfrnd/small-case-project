import React from "react";
import SideSectionFilter from "./SideSectionFilter";
import CardHolder from "./CardHolder";

const Background = () => {
  return (
    <>
      <div className="w-[70%] mt-[32px] grid grid-cols-[25%_75%] gap-0">
        <SideSectionFilter />
        <CardHolder />
      </div>
    </>
  );
};

export default Background;
