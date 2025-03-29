import React, { useState } from "react";
import SmallCaseCard from "./ListedCard/SmallCaseCard";
import Spinner from "./ListedCard/Loader";
import LogoURL from "../JSON /LogoUrl";
// let data = stocks.data;
const CardHolder = ({ data }) => {
  // console.log(Array.from(data));
  if (!data) data = [];

  return (
    <>
      <div className="w-[100%] h-full  space-y-2 flex flex-col justify-center items-center">
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
