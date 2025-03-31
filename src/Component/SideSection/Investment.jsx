import React, { useContext } from "react";
import { StrategyData } from "../../App";

const Investment = ({ ruppess, under }) => {
  let { setfilterMethod, filterMethod } = useContext(StrategyData);
  function handleInvestmentAmount(amount) {
    setfilterMethod((prev) => ({
      ...prev,
      InvestmentAmount: amount,
    }));
  }
  return (
    <div className="mt-1 cursor-pointer pl-0 hover:bg-gray-200 w-[70%] p-1 rounded">
      <ul>
        <li className="flex space-x-2">
          <input
            type="radio"
            name="investmentAmount"
            onChange={() => handleInvestmentAmount(ruppess ?? 0)}
            checked={filterMethod.InvestmentAmount === (ruppess ?? 0)}
            className="h-[15px] w-[15px] mt-[2px]"
            id={`investment-${ruppess}`}
          />
          <label
            htmlFor={`investment-${ruppess}`}
            className="flex cursor-pointer space-x-2"
          >
            <p className="text-[14px] text-gray-500 font-medium">{under}</p>
            {ruppess && (
              <p className="text-[14px] text-gray-500 font-medium">
                ₹{ruppess}
              </p>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Investment;
