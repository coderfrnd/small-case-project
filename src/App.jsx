import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Discover from "./Component/Discover";
import Filter from "./Component/Filter";
import Background from "./Component/Background";
import FilterMethods from "./Component/Functions/FilterMethod";

const StrategyData = createContext();
let filterStratgey = {
  subs: null,
  InvestmentAmount: 0,
  Volatility: new Set(),
  LaunchDate: [],
  InvestmentStrategy: [],
  popualarity: false,
  minimumAmount: false,
  cagrYear: 3,
};
const App = () => {
  const [filterMethod, setfilterMethod] = useState(filterStratgey);
  let data = FilterMethods(filterMethod);

  return (
    <StrategyData.Provider value={{ setfilterMethod, filterMethod }}>
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
