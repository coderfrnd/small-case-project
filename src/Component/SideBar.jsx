import React from "react";
import Subscription from "./Subscription";

const SideBar = ({ filterSubs }) => {
  return (
    <>
      <div className="flex justify-center">
        <Subscription getAllData={filterSubs} />
      </div>
    </>
  );
};

export default SideBar;
