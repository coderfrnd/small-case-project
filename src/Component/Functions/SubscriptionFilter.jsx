import smallCase from "../../JSON /smallcases.json";

let data = smallCase.data;

const SubscriptionFilter = (type) => {
  if (type === "all") return data;
  let arr = data.filter((ele) => {
    if (ele.flags.private == type) {
      return ele;
    }
  });
  //   console.log(Array.isArray(arr));

  return arr;
};

export default SubscriptionFilter;
