import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import SubscriptionFilter from "./Component/Functions/SubscriptionFilter";
import Discover from "./Component/Discover";
import Filter from "./Component/Filter";
import Background from "./Component/Background";

const StrategyData = createContext();

const App = () => {
  const [data, setData] = useState(SubscriptionFilter("all"));
  const [strategySet, setStrategySet] = useState(new Set());

  function handleClick(stocksData) {
    setData(stocksData);
  }

  return (
    <StrategyData.Provider value={{ setData, strategySet, setStrategySet }}>
      <div className="relative w-full bg-white h-full">
        <Navbar />
        <div className="mt-[88px] flex justify-center flex-col items-center">
          <Discover />
          <Filter popularity={handleClick} />
          <Background data={data} />
        </div>
      </div>
    </StrategyData.Provider>
  );
};

export default App;
export { StrategyData };
