import React, { useState } from "react";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";
import SideBar from "./Component/SideBar";
import SubscriptionFilter from "./Component/Functions/SubscriptionFilter";

const App = () => {
  const [data, setdata] = useState(SubscriptionFilter("all"));

  function handleClick(stocksData) {
    setdata(stocksData);
  }
  return (
    <div className=" w-full bg-white ">
      <Navbar />
      <div className="grid grid-cols-[30%_70%]">
        <SideBar filterSubs={handleClick} />
        <Card data={data} />
      </div>
    </div>
  );
};

export default App;
