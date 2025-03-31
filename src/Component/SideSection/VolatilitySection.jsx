import React, { useContext } from "react";
import HeadingStrategy from "./HeadingAndButtons/HeadingStrategy";
import SubscriptionButtons from "./HeadingAndButtons/SubscriptionButton";
import { StrategyData } from "../../App";

const VolatilitySection = () => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);
  function handleVolatility(type) {
    const formattedType = type + " Volatility";
    let newSet = new Set(filterMethod.volatility);
    if (newSet.has(formattedType)) {
      newSet.delete(formattedType);
    } else {
      newSet.add(formattedType);
    }
    setfilterMethod((prev) => ({
      ...prev,
      volatility: newSet,
    }));
  }

  return (
    <>
      <HeadingStrategy props={"Volatilty"} />

      {["Low", "Medium", "High"].map((ele, ind) => {
        let isActive = filterMethod.volatility.has(ele + " Volatility");
        let activeExtraCss = isActive
          ? "border-2 py-4 mx-[2px] border-blue-600 bg-blue-100 text-blue-700"
          : "border py-4 mx-[2px] border-gray-300 text-gray-400";

        return (
          <SubscriptionButtons
            key={ind}
            props={ele}
            activeExtraCss={activeExtraCss}
            setfilterMethod={setfilterMethod}
            handlefn={handleVolatility}
          />
        );
      })}
    </>
  );
};

export default VolatilitySection;
