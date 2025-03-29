import React, { useContext } from "react";
import { StrategyData } from "../../App";

const Investment = ({ ruppess, under, showChecked }) => {
  let { setfilterMethod } = useContext(StrategyData);
  // let showChecked;
  function handleInvestmentAmount(amount) {
    // if(amount)
    // console.log(amount);

    setfilterMethod((prev) => ({
      ...prev,
      InvestmentAmount: amount,
    }));
  }
  return (
    <div className="mt-1 cursor-pointer  pl-0 hover:bg-gray-200 w-[70%] p-1 rounded ">
      <ul className="">
        <li className="flex space-x-2">
          <label htmlFor={under} className="flex cursor-pointer">
            <input
              type="radio"
              onChange={() => handleInvestmentAmount(ruppess ? ruppess : 0)}
              checked={showChecked}
              className="h-[15px] w-[15px]"
              id={under}
              // onClick={() => handleInvestmentAmount(ruppess ? ruppess : 0)}
            />
            <p className="text-[14px] text-gray-500 font-medium">{under}</p>
            <p className="text-[14px] text-gray-500 font-medium">{ruppess}</p>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Investment;
