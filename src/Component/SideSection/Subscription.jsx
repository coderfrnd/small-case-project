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
      subs: type === "Show All" ? null : type === "Free Access" ? false : true,
    }));
  }

  return (
    <>
      <HeadingStrategy props={"Subscription Type"} />
      <div
        className="flex border border-gray-200 w-[240px] rounded"
        role="group"
      >
        {subscriptionList.map((ele, ind) => (
          <SubscriptionButtons
            key={ind}
            props={ele}
            setfilterMethod={setfilterMethod}
            handlefn={handleSubscriptionClick}
          />
        ))}
      </div>
    </>
  );
};

export default SubscriptionSection;
