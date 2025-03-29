import React, { useContext, useState } from "react";
import Investment from "./Investment";
import LaunchDate from "./LaunchDate";
import InvestmentStratgey from "./InvestmentStratgey";
import { StrategyData } from "../../App";

let subscriptionList = ["Show All", "Free Access", "Fee Based"];
let investmentArray = [
  { under: "All" },
  { under: "Under", ruppess: 5000 },
  { under: "Under", ruppess: 25000 },
  { under: "Under", ruppess: 50000 },
];
const SideSectionFilter = () => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);
  function handleVolatility(type, setfilterMethod) {
    type = type + " " + "Volatility";
    let checkItem = filterMethod.Volatility;
    let newArrayOfVol = Array.from(checkItem);
    let newSet = new Set();
    if (checkItem.has(type)) {
      newArrayOfVol = newArrayOfVol.filter((ele) => ele != type);
    } else newArrayOfVol.push(type);
    newArrayOfVol.forEach((ele) => newSet.add(ele));
    setfilterMethod((prev) => ({
      ...prev,
      Volatility: newSet,
    }));
  }
  return (
    <>
      <aside className="w-[100%] text-black ">
        <section className="">
          <HeadingForStrategy props={"Subscription Type"} />
          <div
            className="flex border border-gray-200 w-[240px] rounded"
            role="group"
          >
            {subscriptionList.map((ele, ind) => {
              return (
                <SubscriptionButtons
                  props={ele}
                  key={ind}
                  setfilterMethod={setfilterMethod}
                  handlefn={handleSubscriptionClick}
                />
              );
            })}
          </div>
          <HeadingForStrategy props={"Investment Amount"} />
          {investmentArray.map((ele, ind) => {
            let amount = ele.ruppess;
            if (amount == undefined) amount = 0;
            let showChecked =
              amount === filterMethod.InvestmentAmount ? true : false;
            return <Investment {...ele} key={ind} showChecked={showChecked} />;
          })}
          <HeadingForStrategy props={"Volatiltiy"} />
          {["Low", "Medium", "High"].map((ele, ind) => {
            let activeExtraCss = "border py-4 mx-[2px] border-gray-300";
            return (
              <SubscriptionButtons
                props={ele}
                activeExtraCss={activeExtraCss}
                key={ind}
                setfilterMethod={setfilterMethod}
                handlefn={handleVolatility}
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
function SubscriptionButtons({
  props,
  activeExtraCss = "",
  handlefn,
  setfilterMethod,
  extraCss,
}) {
  return (
    <button
      type="button"
      className={
        `px-4 py-2 text-[14px] font-medium text-gray-500 cursor-pointer  hover:bg-gray-100 active:text-blue-500 ${activeExtraCss}` +
        { extraCss }
      }
      onClick={(e) => handlefn(props, setfilterMethod)}
    >
      {props}
    </button>
  );
}
function handleSubscriptionClick(type, setfilterMethod) {
  if (type === subscriptionList[0]) {
    setfilterMethod((prev) => ({
      ...prev,
      subs: null,
    }));
  }
  if (type === subscriptionList[1]) {
    setfilterMethod((prev) => ({
      ...prev,
      subs: false,
    }));
  }
  if (type === subscriptionList[2]) {
    setfilterMethod((prev) => ({
      ...prev,
      subs: true,
    }));
  }
}
