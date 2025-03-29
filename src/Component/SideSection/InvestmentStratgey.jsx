import React, { useContext, useEffect, useState } from "react";
import LaunchDate from "./LaunchDate";
import { StrategyData } from "../../App";
import CombineStratgey from "../Functions/InvestmentStratgeyFunction";

const InvestmentStratgey = () => {
  const [applyStratgey, setApplyStratgey] = useState([]);
  const investmentStrategies = [
    "Asset Allocation",
    "Corporate Governance",
    "Dividend",
    "ESG",
    "Factor Investing",
    "Fundamental",
    "Goal Based",
    "Growth",
    "Momentum",
    "Quality",
    "Quantamental",
    "Quantitative",
    "Sector Tracker",
    "Technical",
    "Thematic",
    "Value",
  ];

  let { setData, strategySet, setStrategySet } = useContext(StrategyData);

  function handleStartgey(ind) {
    let result = applyStratgey.find((ele) => ele == investmentStrategies[ind]);
    if (result)
      setApplyStratgey(
        applyStratgey.filter((ele) => ele != investmentStrategies[ind])
      );
    else setApplyStratgey([...applyStratgey, investmentStrategies[ind]]);
  }
  useEffect(() => {
    CombineStratgey(setStrategySet, strategySet, applyStratgey, setData);
  }, [applyStratgey]);
  return (
    <>
      {investmentStrategies.map((ele, ind) => {
        return (
          <LaunchDate
            under={ele}
            key={ind}
            handleStartgey={handleStartgey}
            ind={ind}
          />
        );
      })}
    </>
  );
};

export default InvestmentStratgey;
