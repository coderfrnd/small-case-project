import React, { useContext, useState } from "react";
import LaunchDate from "./LaunchDate";
import InvestmentStratgey from "./InvestmentStratgey";
import SubscriptionSection from "./Subscription";
import InvestmentAmount from "./InvestmentAmount";
import VolatilitySection from "./VolatilitySection";
import HeadingStrategy from "./HeadingAndButtons/HeadingStrategy";
import { StrategyData } from "../../App";
import FilterCount from "./FilterCount";

const SideSectionFilter = () => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);
  function handleLaunchDate() {
    setfilterMethod((prev) => ({
      ...prev,
      includeNewSmallcase: !prev.includeNewSmallcase,
    }));
  }
  return (
    <>
      <aside className="w-[100%] text-black ">
        <section className="">
          <FilterCount />
          <SubscriptionSection />
          <InvestmentAmount />
          <VolatilitySection />
          <HeadingStrategy props={"Launch Date"} />
          <LaunchDate
            under={"Include all new small case"}
            handleStartgey={handleLaunchDate}
            ind={"launchDate"}
            checked={filterMethod.includeNewSmallcase}
          />
          <HeadingStrategy props={"Investment Stratgey"} />
          <InvestmentStratgey />
        </section>
      </aside>
    </>
  );
};
export default SideSectionFilter;
