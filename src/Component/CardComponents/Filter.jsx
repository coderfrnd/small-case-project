import React, { useContext, useState } from "react";
import { StrategyData } from "../../App";
import {
  handleCagrYear,
  handlePopularity,
  handleRecentlyRebalanced,
  handleSortingBasedOnMinimumAmount,
} from "../Utils/HandleFilter";

const Filter = () => {
  let {
    setfilterMethod,
    filterMethod,
    setsortBasedOnCondition,
    sortBasedOnCondition,
  } = useContext(StrategyData);

  function activeSortingBasedOnCagr(value) {
    setsortBasedOnCondition((prev) => ({
      ...prev,
      sortMethod: value,
    }));
  }
  const timePeriodOptions = [
    { label: "1M", value: "monthly", display: "1 M returns" },
    { label: "6M", value: "halfyearly", display: "6 M returns" },
    { label: "1Y", value: "yearly", display: "1 Year CAGR" },
    { label: "3Y", value: "threeYear", display: "3 Year CAGR" },
    { label: "5Y", value: "fiveYear", display: "5 Year CAGR" },
  ];

  const sortingOptions = [
    { label: "High To Low", value: "High" },
    { label: "Low To High", value: "Low" },
  ];

  return (
    <div className="w-[62%] mt-[16px] border-b border-gray-300 flex justify-between text-gray-600">
      <div className="flex space-x-8 text-[17px] font-[450] pb-[16px]">
        <h4>Collection</h4>
        <h4>All smallcases</h4>
        <h4>Mangers</h4>
      </div>
      <div className=" flex space-x-4">
        <div className="dropdown w-[240px] border-b">
          <div
            tabIndex={0}
            role="button"
            className="pt-1 border-none cursor-pointer px-3 flex justify-between"
          >
            <span>
              {sortBasedOnCondition.activeSortingWay === "Cagr"
                ? timePeriodOptions.find(
                    (ele) => ele.value === filterMethod.cagrYear
                  )?.display
                : sortBasedOnCondition.activeSortingWay}{" "}
            </span>
            <span>^</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-[220px] p-2 shadow-sm"
          >
            <li
              className="flex"
              onClick={() =>
                handlePopularity(setfilterMethod, setsortBasedOnCondition)
              }
            >
              <span>Popularity </span>
            </li>
            <li
              onClick={() =>
                handleSortingBasedOnMinimumAmount(
                  setfilterMethod,
                  setsortBasedOnCondition
                )
              }
            >
              <span>Minimum Amount</span>
            </li>
            <li
              onClick={() =>
                handleRecentlyRebalanced(
                  setfilterMethod,
                  setsortBasedOnCondition
                )
              }
            >
              <span>Recently Rebalanced</span>
            </li>
            <span className="w-[100%] pl-3 font-bold mt-2">Time Period </span>
            <div className="w-[170px] cursor-pointer rounded ml-3 h-[20%]  font-medium flex border border-gray-200 p-1 mt-2 mb-2 justify-between">
              {timePeriodOptions.map(({ label, value }) => (
                <span
                  key={value}
                  className="hover:bg-gray-200"
                  onClick={() =>
                    handleCagrYear(
                      value,
                      setfilterMethod,
                      setsortBasedOnCondition
                    )
                  }
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="w-[180px] cursor-pointer rounded ml-3 h-[20%]  font-medium flex  p-1 mt-2 mb-2 justify-between text-[11px] ">
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
        </div>
        <label className="flex items-center gap-2 px-3 py-2  bg-white border-b">
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

export default Filter;
