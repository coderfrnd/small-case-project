import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Filter from "./Component/CardComponents/Filter";
import Discover from "./Component/CardComponents/Discover";
import Background from "./Component/CardComponents/Background";
import FilterMethods from "./Component/Functions/FilterMethod";
import { CalculateFilter } from "./Component/Functions/FindStratgeyList";

const StrategyData = createContext();
let filterStratgey = {
  subs: null,
  InvestmentAmount: 0,
  Volatility: new Set(),
  LaunchDate: [],
  InvestmentStrategy: [],
  popualarity: false,
  minimumAmount: false,
  cagrYear: "threeYear",
  recentlyRebalanced: false,
  includeNewSmallcase: false,
};

const App = () => {
  const [filterMethod, setfilterMethod] = useState(filterStratgey);
  let data = FilterMethods(filterMethod);
  let calculateFilter = CalculateFilter(filterMethod);
  return (
    <StrategyData.Provider
      value={{ setfilterMethod, filterMethod, calculateFilter, filterStratgey }}
    >
      <div className="relative w-full bg-white h-full">
        <Navbar />
        <div className="mt-[88px] flex justify-center flex-col items-center">
          <Discover />
          <Filter />
          <Background data={Array.from(data)} />
        </div>
      </div>
    </StrategyData.Provider>
  );
};

export default App;
export { StrategyData };
