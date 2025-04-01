import React, { useContext, useState } from "react";
import { StrategyData } from "../../App";
import {
  handleCagrYear,
  handlePopularity,
  handleRecentlyRebalanced,
  handleSortingBasedOnMinimumAmount,
} from "../Utils/HandleFilter";

const cagrYearLabels = {
  monthly: "1 M returns",
  halfyearly: "6 M returns",
  yearly: "1 Year CAGR",
  threeYear: "3 Year CAGR",
  fiveYear: "5 Year CAGR",
};

const SortingDropdown = () => {
  let { setSortBasedOnCondition, sortBasedOnCondition } =
    useContext(StrategyData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function activeSortingBasedOnCagr(value) {
    setSortBasedOnCondition((prev) => ({
      ...prev,
      sortMethod: value,
    }));
  }

  const timePeriodOptions = [
    { label: "1M", value: "monthly" },
    { label: "6M", value: "halfyearly" },
    { label: "1Y", value: "yearly" },
    { label: "3Y", value: "threeYear" },
    { label: "5Y", value: "fiveYear" },
  ];

  const sortingOptions = [
    { label: "High To Low", value: "High" },
    { label: "Low To High", value: "Low" },
  ];

  return (
    <div className="w-[1180px] mt-[16px] border-b border-gray-300 flex justify-between text-gray-600">
      <div className="flex space-x-8 text-[17px] font-[450] pb-[16px]">
        <h4>Collection</h4>
        <h4>All smallcases</h4>
        <h4>Managers</h4>
      </div>
      <div className="flex space-x-4">
        <div className="relative w-[240px] border-b">
          <div
            role="button"
            className="pt-1 border-none cursor-pointer px-3 flex justify-between"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>
              {sortBasedOnCondition.active && sortBasedOnCondition.cagrYear
                ? cagrYearLabels[sortBasedOnCondition.cagrYear]
                : sortBasedOnCondition.activeSortingWay}
            </span>
            <span
              className={`transform transition-transform duration-300 ${
                isDropdownOpen ? "rotate-0" : "rotate-180"
              }`}
            >
              ^
            </span>
          </div>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-1 dropdown-content menu bg-base-100 rounded-box z-10 w-[220px] p-2 shadow-sm">
              <li
                className="flex"
                onClick={() => handlePopularity(setSortBasedOnCondition)}
              >
                <span>Popularity</span>
              </li>
              <li
                onClick={() =>
                  handleSortingBasedOnMinimumAmount(setSortBasedOnCondition)
                }
              >
                <span>Minimum Amount</span>
              </li>
              <li
                onClick={() =>
                  handleRecentlyRebalanced(setSortBasedOnCondition)
                }
              >
                <span>Recently Rebalanced</span>
              </li>

              <span className="w-[100%] pl-3 font-bold mt-2">Time Period</span>
              <div className="w-[170px] cursor-pointer rounded ml-3 h-[20%] font-medium flex border border-gray-200 p-1 mt-2 mb-2 justify-between">
                {timePeriodOptions.map(({ label, value }) => (
                  <span
                    key={value}
                    className="hover:bg-gray-200"
                    onClick={() =>
                      handleCagrYear(value, setSortBasedOnCondition)
                    }
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="w-[180px] cursor-pointer rounded ml-3 h-[20%] font-medium flex p-1 mt-2 mb-2 justify-between text-[11px]">
                {sortingOptions.map(({ label, value }) => (
                  <span
                    key={value}
                    className="border border-gray-200 px-[10px] py-1"
                    onClick={() => activeSortingBasedOnCagr(value)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </ul>
          )}
        </div>
        <label className="flex items-center gap-2 px-3 py-2 bg-white border-b">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            className="bg-white w-full border-none outline-none focus:ring-0"
          />
        </label>
      </div>
    </div>
  );
};

export default SortingDropdown;
