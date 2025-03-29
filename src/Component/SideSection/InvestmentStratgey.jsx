import React, { useContext, useEffect, useState } from "react";
import LaunchDate from "./LaunchDate";
import { StrategyData } from "../../App";
import { stratgeyList } from "../Functions/FindStratgeyList";

const InvestmentStratgey = () => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);

  function handleInvestmentStratgey(val) {
    setfilterMethod((prev) => {
      let arr = prev.InvestmentStrategy || [];
      // console.log(arr, "jj");
      // console.log(arr.includes(val));
      // console.log(val);

      let newArray = arr.includes(val)
        ? arr.filter((ele) => ele !== val)
        : [...arr, val];
      console.log("Updated Array:", newArray);
      return { ...prev, InvestmentStrategy: newArray };
    });
  }

  const investmentStrategies = stratgeyList();
  return (
    <>
      {investmentStrategies.map((ele, ind) => {
        return (
          <LaunchDate
            under={ele}
            key={ind}
            ind={ind}
            handleStartgey={handleInvestmentStratgey}
          />
        );
      })}
    </>
  );
};

export default InvestmentStratgey;
