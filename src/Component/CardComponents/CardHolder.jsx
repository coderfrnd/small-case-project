import React, { useContext } from "react";
import SmallCaseCard from "../ListedCard/SmallCaseCard";
import LogoURL from "../Navbar/LogoUrl.js";
import { StrategyData } from "../../App";
import { cagrCalculate } from "../Utils/FindStratgeyList.js";
const CardHolder = ({ data }) => {
  if (!data) data = [];
  let { filterMethod } = useContext(StrategyData);
  return (
    <>
      <div className="w-[100%] h-full  space-y-2 flex flex-col items-center">
        {data.map((ele, ind) => {
          let valatility = ele.stats.ratios.riskLabel;
          let minInvestment = ele.stats.minInvestAmount;
          minInvestment = minInvestment.toLocaleString("en-IN", {
            currency: "INR",
          });
          let year = filterMethod.cagrYear;
          let cagr = cagrCalculate(ele, year);
          cagr = cagr * 100;
          cagr = cagr.toFixed(2);
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
              year={year}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardHolder;
