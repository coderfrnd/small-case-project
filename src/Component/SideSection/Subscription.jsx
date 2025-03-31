import React, { useContext } from "react";
import HeadingStrategy from "./HeadingAndButtons/HeadingStrategy";
import SubscriptionButtons from "./HeadingAndButtons/SubscriptionButton";
import { StrategyData } from "../../App";
const subscriptionList = ["Show All", "Free Access", "Fee Based"];
const SubscriptionSection = () => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);
  function handleSubscriptionClick(type) {
    setfilterMethod((prev) => ({
      ...prev,
      Subscription: [type],
    }));
  }

  return (
    <>
      <HeadingStrategy props={"Subscription Type"} />
      <div
        className="flex border border-gray-200 w-[240px] rounded text-gray-400"
        role="group"
      >
        {subscriptionList.map((ele, ind) => {
          let isActive = ele == filterMethod.Subscription[0];
          let activeExtraCss = isActive ? "text-blue-800  bg-blue-100" : "";
          return (
            <SubscriptionButtons
              key={ind}
              props={ele}
              setfilterMethod={setfilterMethod}
              handlefn={handleSubscriptionClick}
              activeExtraCss={activeExtraCss}
            />
          );
        })}
      </div>
    </>
  );
};

export default SubscriptionSection;
