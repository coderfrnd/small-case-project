import React from "react";
import CardHolder from "./CardHolder";
import SideSectionFilter from "../SideSection/SideSectionFilter";

const Background = ({ data }) => {
  return (
    <>
      <div className="w-[1180px] mt-[32px] grid grid-cols-[22%_73%] gap-[3%]">
        <SideSectionFilter />
        <CardHolder data={data} />
      </div>
    </>
  );
};

export default Background;
