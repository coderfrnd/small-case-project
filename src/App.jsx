import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import SortingDrowdown from "./Component/CardComponents/SortingDropdown.jsx";
import Discover from "./Component/CardComponents/Discover";
import Background from "./Component/CardComponents/Background";
import {
  calculateFilter,
  fetchAllJsonData,
  sortingBasedOnConditionFunction,
  strategyList,
} from "./Component/Utils/FindStratgeyList.js";
import applyFilterMethods from "./Component/Utils/FilterMethod.js";
import Spinner from "./Component/ListedCard/Loader.jsx";

const StrategyData = createContext();

let filterStratgey = {
  subscription: ["Show All"],
  investmentAmount: 0,
  volatility: new Set(),
  investmentStrategy: [],
  includeNewSmallcase: false,
};
let sortStratgey = {
  sortMethod: null,
  active: false,
  activeSortingWay: "Popularity",
  cagrYear: "threeYear",
};
const App = () => {
  const [filterMethod, setfilterMethod] = useState(filterStratgey);
  const [sortBasedOnCondition, setSortBasedOnCondition] =
    useState(sortStratgey);
  const [data, setData] = useState({
    responseData: [],
    investmentStrategiesList: [],
  });
  useEffect(() => {
    async function fetchAllSmallCaseData() {
      try {
        let data = await fetchAllJsonData();
        let strategies = await strategyList();
        setData((prev) => ({
          responseData: data,
          investmentStrategiesList: strategies,
        }));
      } catch (error) {
        console.log("Error in fetching Data", error);
      }
    }
    fetchAllSmallCaseData();
  }, []);
  let filteredData = applyFilterMethods(filterMethod, data.responseData);
  filteredData = sortingBasedOnConditionFunction(
    filteredData,
    sortBasedOnCondition
  );
  let filterCount = calculateFilter(filterMethod);
  return (
    <StrategyData.Provider
      value={{
        setfilterMethod,
        filterMethod,
        filterCount,
        filterStratgey,
        setSortBasedOnCondition,
        sortBasedOnCondition,
        filteredData,
        sortStratgey,
        investmentStrategies: data.investmentStrategiesList,
      }}
    >
      <div className="relative w-full bg-white h-full">
        <Navbar />
        <div className="mt-[88px] flex justify-center flex-col items-center">
          <Discover />
          <SortingDrowdown />
          {data.responseData.length > 0 ? <Background /> : <Spinner />}
        </div>
      </div>
    </StrategyData.Provider>
  );
};

export default App;
export { StrategyData };
