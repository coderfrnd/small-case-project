import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import SubscriptionFilter from "./Component/Functions/SubscriptionFilter";
import Discover from "./Component/Discover";
import Filter from "./Component/Filter";
import Background from "./Component/Background";

const App = () => {
  const [data, setdata] = useState(SubscriptionFilter("all"));

  function handleClick(stocksData) {
    setdata(stocksData);
  }
  return (
    <div className=" relative  w-full bg-white  h-full ">
      <Navbar />
      <div className="mt-[88px] flex justify-center flex-col items-center">
        <Discover />
        <Filter />
        <Background />
      </div>
    </div>
  );
};

export default App;
