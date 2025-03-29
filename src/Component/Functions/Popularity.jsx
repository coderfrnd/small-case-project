import smallCase from "../../JSON /smallcases.json";

let data = smallCase.data;

const PopularityFilter = () => {
  let arr = [];
  data.forEach((ele) => {
    let rank = ele.brokerMeta.flags.popular.rank;
    arr[rank] = ele;
  });
  return arr;
};

export default PopularityFilter;
