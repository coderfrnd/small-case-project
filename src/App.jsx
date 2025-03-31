import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Filter from "./Component/CardComponents/Filter";
import Discover from "./Component/CardComponents/Discover";
import Background from "./Component/CardComponents/Background";
import {
  calculateFilter,
  sortingBasedOnConditionFunction,
} from "./Component/Utils/FindStratgeyList.js";
import applyFilterMethods from "./Component/Utils/FilterMethod.js";

const StrategyData = createContext();
let filterStratgey = {
  Subscription: ["Show All"],
  InvestmentAmount: 0,
  Volatility: new Set(),
  InvestmentStrategy: [],
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
  let data = applyFilterMethods(filterMethod);
  let totalApplyFilterCount = calculateFilter(filterMethod);
  data = sortingBasedOnConditionFunction(
    data,
    sortBasedOnCondition,
    filterMethod.cagrYear
  );
  return (
    <StrategyData.Provider
      value={{
        setfilterMethod,
        filterMethod,
        totalApplyFilterCount,
        filterStratgey,
        setsortBasedOnCondition,
        sortBasedOnCondition,
      }}
    >
      <div className="relative w-full bg-white h-full">
        <Navbar />
        <div className="mt-[88px] flex justify-center flex-col items-center">
          <Discover />
          <Filter />
          <Background data={data} />
        </div>
      </div>
    </StrategyData.Provider>
  );
};

export default App;
export { StrategyData };
