import React, { useContext, useEffect, useState } from "react";
import LaunchDate from "./LaunchDate";
import { StrategyData } from "../../App";
const InvestmentStratgey = () => {
  let { setfilterMethod, filterMethod, investmentStrategies } =
    useContext(StrategyData);

  function handleInvestmentStratgey(val) {
    setfilterMethod((prev) => {
      let arr = prev.investmentStrategy || [];
      let newArray = arr.includes(val)
        ? arr.filter((ele) => ele !== val)
        : [...arr, val];
      return { ...prev, investmentStrategy: newArray };
    });
  }

  return (
    <>
      {investmentStrategies.map((ele, ind) => {
        let checked = filterMethod.investmentStrategy.find(
          (stratgey) => ele === stratgey
        );
        return (
          <LaunchDate
            under={ele}
            key={ind}
            ind={ind}
            handleStartgey={handleInvestmentStratgey}
            checked={checked}
          />
        );
      })}
    </>
  );
};

export default InvestmentStratgey;
