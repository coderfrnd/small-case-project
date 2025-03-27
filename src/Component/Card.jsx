import React, { Fragment, useState } from "react";
import SmallCaseCard from "./ListedCard/SmallCaseCard";

const Card = ({ data }) => {
  return (
    <>
      <div className="flex justify-center flex-col items-center space-y-2">
        {data.map((ele, ind) => {
          return (
            <Fragment key={ind}>
              <SmallCaseCard
                scid={ele.scid}
                name={ele.info.name}
                description={ele.info.shortDescription}
                volatility={ele.stats.ratios.riskLabel}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Card;
