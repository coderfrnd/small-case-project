import React from "react";
import stocks from "../JSON /smallcases.json";
import SmallCaseCard from "./ListedCard/SmallCaseCard";
import Spinner from "./ListedCard/Loader";
import LogoURL from "../JSON /LogoUrl";
// LogoURL
let data = stocks.data;
// let data = [];
const CardHolder = () => {
  return (
    <>
      <div className="w-[100%] h-full  space-y-2 flex flex-col justify-center items-center">
        {data.map((ele) => {
          let valatility = ele.stats.ratios.riskLabel;
          let minInvestment = ele.stats.minInvestAmount;
          let cagr = ele.platformData.ratios.cagr;
          cagr = (cagr * 100).toFixed(1);
          return (
            <SmallCaseCard
              heading={ele.info.name}
              fundLogo={LogoURL + "/" + ele.scid + ".png"}
              decription={ele.info.shortDescription}
              author={ele.info.creator}
              volatility={valatility}
              minInvestmentAmount={minInvestment}
              cagr={cagr}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
