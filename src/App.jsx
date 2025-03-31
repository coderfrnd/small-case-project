import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Filter from "./Component/CardComponents/Filter";
import Discover from "./Component/CardComponents/Discover";
import Background from "./Component/CardComponents/Background";
import {
  calculateFilter,
  fetchAllJsonData,
  sortingBasedOnConditionFunction,
} from "./Component/Utils/FindStratgeyList.js";
import applyFilterMethods from "./Component/Utils/FilterMethod.js";
import Spinner from "./Component/ListedCard/Loader.jsx";

const StrategyData = createContext();

let filterStratgey = {
  subscription: ["Show All"],
  investmentAmount: 0,
  volatility: new Set(),
  investmentStrategy: [],
  popualarity: true,
  minimumAmount: false,
  cagrYear: "threeYear",
  recentlyRebalanced: false,
  includeNewSmallcase: false,
};

const App = () => {
  const [filterMethod, setfilterMethod] = useState(filterStratgey);
  const [sortBasedOnCondition, setsortBasedOnCondition] = useState({
    sortMethod: null,
    active: false,
    activeSortingWay: "Popularity",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [totalApplyFilterCount, setTotalApplyFilterCount] = useState(0);

  useEffect(() => {
    async function fetchAllSmallCaseData() {
      try {
        let data = await fetchAllJsonData();
        let filtered = applyFilterMethods(filterMethod, data);
        let totalFilters = calculateFilter(filterMethod);
        filtered = sortingBasedOnConditionFunction(
          filtered,
          sortBasedOnCondition,
          filterMethod.cagrYear,
          data
        );
        setFilteredData(filtered);
        setTotalApplyFilterCount(totalFilters);
      } catch (error) {
        console.log("Error in fetching Data", error);
      }
    }
    fetchAllSmallCaseData();
  }, [filterMethod, sortBasedOnCondition]);

  return (
    <StrategyData.Provider
      value={{
        setfilterMethod,
        filterMethod,
        totalApplyFilterCount,
        filterStratgey,
        setsortBasedOnCondition,
        sortBasedOnCondition,
        filteredData,
      }}
    >
      <div className="relative w-full bg-white h-full">
        <Navbar />
        <div className="mt-[88px] flex justify-center flex-col items-center">
          <Discover />
          <Filter />
          {filteredData.length ? (
            <Background data={filteredData} />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </StrategyData.Provider>
  );
};

export default App;
export { StrategyData };
