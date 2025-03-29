import React from "react";

const SubscriptionButtons = ({
  props,
  activeExtraCss = "",
  handlefn,
  setfilterMethod,
  extraCss = "",
}) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 text-[14px] font-medium text-gray-500 cursor-pointer hover:bg-gray-100 active:text-blue-500 ${activeExtraCss} ${extraCss}`}
      onClick={() => handlefn(props, setfilterMethod)}
    >
      {props}
    </button>
  );
};

export default SubscriptionButtons;
