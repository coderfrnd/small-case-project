import smallCase from "../../JSON /smallcases.json";
let data = smallCase.data;
export default function AllData() {
  return data;
}
let cagrYearObject = {
  threeYear: 3,
  yearly: 1,
  fiveYear: 5,
};
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
export function CalculateFilter(filterList) {
  let x = 0;
  for (let key in filterList) {
    let value = filterList[key];

    if (
      value === null ||
      value === 0 ||
      value.size == 0 ||
      value.length == 0 ||
      value == false ||
      key == "popualarity" ||
      key == "minimumAmount" ||
      key == "cagrYear" ||
      key == "recentlyRebalanced"
    ) {
      continue;
    }
    if (value instanceof Set) {
      x += value.size;
    } else if (Array.isArray(value)) {
      x += value.length;
    } else {
      console.log(value, key);
      console.log("gh");
      x++;
    }
  }
  return x;
}
export function cagrCalculate(currentObj, selectedYear) {
  let a = 1 + currentObj.stats.returns[selectedYear];
  let b = 1 / cagrYearObject[selectedYear];
  return Math.pow(a, b) - 1;
}
