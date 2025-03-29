import React, { useContext, useState } from "react";
import SmallCaseCard from "./ListedCard/SmallCaseCard";
import LogoURL from "../JSON /LogoUrl";
import { StrategyData } from "../App";
import { calculateCAGR } from "./Functions/FindStratgeyList";
const CardHolder = ({ data }) => {
  if (!data) data = [];
  let { setfilterMethod, filterMethod } = useContext(StrategyData);
  return (
    <>
      <div className="w-[100%] h-full  space-y-2 flex flex-col items-center">
        {data.map((ele, ind) => {
          let valatility = ele.stats.ratios.riskLabel;
          let minInvestment = ele.stats.minInvestAmount;
          // let cagr = ele.platformData.ratios.cagr;
          let initialValue = ele.stats.launchDateIndex;
          let finalValue = ele.stats.indexValue;
          let year = filterMethod.cagrYear;
          let calculateCagr = calculateCAGR(
            initialValue,
            finalValue,
            year
          ).toFixed(2);
          return (
            <SmallCaseCard
              heading={ele.info.name}
              fundLogo={LogoURL + "/" + ele.scid + ".png"}
              description={ele.info.shortDescription}
              author={ele.info.creator}
              volatility={valatility}
              minInvestmentAmount={minInvestment}
              cagr={calculateCagr}
              key={ind}
              year={year}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
