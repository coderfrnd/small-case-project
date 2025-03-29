import React, { useState } from "react";
import SmallCaseCard from "./ListedCard/SmallCaseCard";
import LogoURL from "../JSON /LogoUrl";
const CardHolder = ({ data }) => {
  if (!data) data = [];
  return (
    <>
      <div className="w-[100%] h-full  space-y-2 flex flex-col items-center">
        {data.map((ele, ind) => {
          let valatility = ele.stats.ratios.riskLabel;
          let minInvestment = ele.stats.minInvestAmount;
          let cagr = ele.platformData.ratios.cagr;
          cagr = (cagr * 100).toFixed(1);
          return (
            <SmallCaseCard
              heading={ele.info.name}
              fundLogo={LogoURL + "/" + ele.scid + ".png"}
              description={ele.info.shortDescription}
              author={ele.info.creator}
              volatility={valatility}
              minInvestmentAmount={minInvestment}
              cagr={cagr}
              key={ind}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
