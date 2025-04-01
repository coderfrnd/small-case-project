import React from "react";
import High from "../../Assets/High.png";
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
  let cagrYearObject = {
    threeYear: "3 Y CAGR",
    yearly: "1 Y CAGR",
    fiveYear: "5 Y CAGR",
    monthly: "1 M Returns",
    halfyearly: "6 M Returns",
  };
  return (
    <article className="w-full max-w-[1300px] border-b border-gray-300 hover:shadow-md bg-white flex text-gray-600 mt-2 mb-4 mx-auto">
      <section className=" pt-4 pl-2">
        <img src={fundLogo} alt="Fund Logo" className="h-16 w-16" />
      </section>
      <section className="flex flex-1 justify-between items-center p-4">
        <div className="flex flex-col w-[50%]">
          <h2 className="text-lg font-semibold text-black">{heading}</h2>
          <span className="pt-1 text-[15px] text-gray-500">
            {description.slice(0, 82)}...
          </span>
          <span className="pt-1 text-sm text-gray-500">by {author}</span>
        </div>
        <div className="flex ml-4 space-x-5 items-center w-[50%]">
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
              {cagrYearObject[year]}
            </span>
            <span
              className={`${
                cagr > 0 ? "text-green-600" : "text-red-500"
              } text-[16px] font-semibold `}
            >
              {cagr}%
            </span>
          </div>
          <div className="px-2 py-1 border border-gray-300 rounded-md flex justify-center">
            <img src={High} alt="" className="h-[24px] w-[24px]" />
            <span className="text-sm pt-[2px]">
              {" "}
              {volatility.slice(0, 4)} Volatility{" "}
            </span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default SmallCaseCard;
