import React from "react";
import LogoUrl from "../../JSON /LogoUrl";

const SmallCaseCard = ({
  heading,
  fundLogo,
  decription,
  author,
  volatility,
  minInvestmentAmount,
  cagr,
}) => {
  return (
    <>
      <article className="  w-[100%] border-b border-gray-300 hover:shadow-md bg-amber-50 flex text-gray-600 mt-2 mb-2 ">
        <section className="pl-2 pt-4 pr-6">
          <h1 className="h-[64px] w-[64px] ">
            {" "}
            <img src={fundLogo} alt="" />
          </h1>
        </section>
        <section className="flex pb-5 pt-4">
          <div className="flex flex-col w-[450px]">
            <div className="flex">
              <h2 className="text-[18px] font-semibold  text-black pt-0">
                {heading}
              </h2>
              <span></span>
            </div>
            <span className="pt-2 pr-3 text-[15px] font-[500] ">
              {decription}
            </span>
            <span className="pt-2"> by {author}</span>
          </div>
          <div className="flex pt-8 pl-6 pb-6">
            <section className="flex flex-col  pb-2  space-y-2 ">
              <span className=" pr-6 text-[15px] font-medium ">Min.Amount</span>
              <span className=" text-[16px] text-black ">
                {minInvestmentAmount}
              </span>
            </section>
            <section className="flex flex-col font-medium pb-2 space-y-2">
              <span className=" pr-6 text-[15px] text-gray-600 text-nowrap">
                3Y CAGR
              </span>
              <span className=" text-[16px] text-green-600 ">{cagr} %</span>
            </section>
            <button className=" cursor-pointer  px-9 border-[1px] border-gray-300 mx-4 my-4">
              {volatility}
            </button>
          </div>
        </section>
      </article>
    </>
  );
};

export default SmallCaseCard;
