import React, { useContext, useState } from "react";
import LaunchDate from "./LaunchDate";
import InvestmentStratgey from "./InvestmentStratgey";
import SubscriptionSection from "./Subscription";
import InvestmentAmount from "./InvestmentAmount";
import VolatilitySection from "./VolatilitySection";

const SideSectionFilter = () => {
  return (
    <>
      <aside className="w-[100%] text-black ">
        <section className="">
          <SubscriptionSection />
          <InvestmentAmount />
          <VolatilitySection />
          <HeadingForStrategy props={"Launch Date"} />
          <LaunchDate under={"Include all new small case"} />
          <HeadingForStrategy props={"Investment Stratgey"} />
          <InvestmentStratgey />
        </section>
      </aside>
    </>
  );
};
export default SideSectionFilter;
