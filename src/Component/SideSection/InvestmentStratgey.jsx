import React, { useContext, useEffect, useState } from "react";
import LaunchDate from "./LaunchDate";
import { StrategyData } from "../../App";
import { stratgeyList } from "../Utils/FindStratgeyList.js";

const InvestmentStratgey = () => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);

  function handleInvestmentStratgey(val) {
    setfilterMethod((prev) => {
      let arr = prev.InvestmentStrategy || [];
      let newArray = arr.includes(val)
        ? arr.filter((ele) => ele !== val)
        : [...arr, val];
      return { ...prev, InvestmentStrategy: newArray };
    });
  }

  const investmentStrategies = stratgeyList();
  return (
    <>
      {investmentStrategies.map((ele, ind) => {
        let checked = filterMethod.InvestmentStrategy.find(
          (stratgey) => ele == stratgey
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
