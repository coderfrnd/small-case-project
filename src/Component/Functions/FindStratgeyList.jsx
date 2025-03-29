import smallCase from "../../JSON /smallcases.json";
let data = smallCase.data;
export default function AllData() {
  return data;
}
export function stratgeyList() {
  let newSetForList = new Set();
  data.forEach((ele) => {
    let listOfStratgey = ele.info.investmentStrategy;
    listOfStratgey.forEach((val) => {
      newSetForList.add(val.displayName);
    });
  });

  return Array.from(newSetForList);
}
export function calculateCAGR(initialValue, finalValue, years) {
  return ((finalValue / initialValue) ** (1 / years) - 1) * 100;
}
