import React from "react";
import HeadingStrategy from "./HeadingAndButtons/HeadingStrategy";
import Investment from "./Investment";

const investmentArray = [
  { under: "All" },
  { under: "Under", ruppess: 5000 },
  { under: "Under", ruppess: 25000 },
  { under: "Under", ruppess: 50000 },
];

const InvestmentAmount = () => {
  return (
    <>
      <HeadingStrategy props="Investment Amount" />
      {/* <Investment */}
      {investmentArray.map((ele, ind) => (
        <Investment key={ind} {...ele} />
      ))}
    </>
  );
};

export default InvestmentAmount;
