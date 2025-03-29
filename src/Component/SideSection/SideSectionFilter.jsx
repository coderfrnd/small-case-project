import React from "react";
import Investment from "./Investment";
import LaunchDate from "./LaunchDate";
import InvestmentStratgey from "./InvestmentStratgey";

const SideSectionFilter = () => {
  let investmentArray = [
    { under: "All" },
    { under: "Under", ruppess: 5000 },
    { under: "Under", ruppess: 25000 },
    { under: "Under", ruppess: 50000 },
  ];

  return (
    <>
      <aside className="w-[100%] text-black ">
        <section className="">
          <HeadingForStrategy props={"Subscription Type"} />
          <div
            className="flex border border-gray-200 w-[240px] rounded"
            role="group"
          >
            {["Show All", "Free Access", "Fee Based"].map((ele, ind) => {
              return <SubscriptionButtons props={ele} key={ind} />;
            })}
          </div>
          <HeadingForStrategy props={"Investment Amount"} />
          {investmentArray.map((ele, ind) => {
            return <Investment {...ele} key={ind} />;
          })}
          <HeadingForStrategy props={"Volatiltiy"} />
          {["Low", "Medium", "High"].map((ele, ind) => {
            return (
              <SubscriptionButtons
                props={ele}
                extraCss={"border py-4 mx-[2px] border-gray-300"}
                key={ind}
              />
            );
          })}
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

function HeadingForStrategy({ props }) {
  return (
    <article className="text-[14px] font-extrabold text-gray-600 mb-2 mt-3">
      {props}
    </article>
  );
}
function SubscriptionButtons({ props, extraCss = "" }) {
  return (
    <button
      type="button"
      className={`px-4 py-2 text-[14px] font-medium text-gray-500 cursor-pointer hover:bg-gray-100 active:text-blue-500 ${extraCss}`}
    >
      {props}
    </button>
  );
}
