import React from "react";
import SideSectionFilter from "./SideSection/SideSectionFilter";
import CardHolder from "./CardHolder";

const Background = ({ data }) => {
  return (
    <>
      <div className="w-[70%] mt-[32px] grid grid-cols-[22%_78%] gap-0">
        <SideSectionFilter />
        <CardHolder data={data} />
      </div>
    </>
  );
};

export default Background;
