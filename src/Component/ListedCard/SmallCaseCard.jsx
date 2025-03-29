import React from "react";

const SmallCaseCard = ({
  heading,
  fundLogo,
  description,
  author,
  volatility,
  minInvestmentAmount,
  cagr,
  year,
}) => {
  return (
    <article className="w-full max-w-[1300px] border-b border-gray-300 hover:shadow-md bg-white flex text-gray-600 mt-2 mb-4 mx-auto">
      <section className=" pt-4 pl-2">
        <img src={fundLogo} alt="Fund Logo" className="h-16 w-16" />
      </section>
      <section className="flex flex-1 justify-between items-center p-4">
        <div className="flex flex-col w-[50%]">
          <h2 className="text-lg font-semibold text-black">{heading}</h2>
          <span className="pt-1 text-[15px] text-black">{description}</span>
          <span className="pt-1 text-sm text-gray-500">by {author}</span>
        </div>
        <div className="flex justify-evenly items-center w-[50%]">
          <div className="flex flex-col text-center">
            <span className="text-gray-600 text-[15px] font-medium">
              Min. Amount
            </span>
            <span className="text-black text-[16px] font-semibold">
              ₹{minInvestmentAmount}
            </span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-gray-600 text-[15px] font-medium">
              {year}Y CAGR
            </span>
            <span className="text-green-600 text-[16px] font-semibold">
              {cagr}%
            </span>
          </div>
          <button className="px-6 py-1 border border-gray-300 rounded-md">
            {volatility}
          </button>
        </div>
      </section>
    </article>
  );
};

export default SmallCaseCard;
