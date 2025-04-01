import React from "react";
import CardHolder from "./CardHolder";
import SideSectionFilter from "../SideSection/SideSectionFilter";

const Background = ({ data }) => {
  return (
    <>
      <div className="w-[1180px] mt-[32px] grid grid-cols-[22%_73%] gap-[3%]">
        <SideSectionFilter />
        {data.length > 0 ? (
          <CardHolder data={data} />
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
