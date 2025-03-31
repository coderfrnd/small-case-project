import smallCase from "../../JSON /smallcases.json";
let data = smallCase.data;
export default function AllData() {
  return data;
}
let cagrYearObject = {
  threeYear: 3,
  yearly: 1,
  fiveYear: 5,
  montly: false,
  halfYearly: false,
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
  let count = 0;
  for (let key in filterList) {
    if (
      [
        "popualarity",
        "minimumAmount",
        "cagrYear",
        "recentlyRebalanced",
      ].includes(key)
    ) {
      continue;
    }
    let value = filterList[key];
    if (
      (key === "Subscription" && value[0] === "Show All") ||
      (key === "InvestmentAmount" && value === 0) ||
      (key === "Volatility" && value.size === 0) ||
      (key === "InvestmentStrategy" && value.length === 0) ||
      (key === "includeNewSmallcase" && !value)
    ) {
      continue;
    }
    count++;
  }
  return count;
}

export function cagrCalculate(currentObj, selectedYear) {
  if (!cagrYearObject[selectedYear]) {
    return currentObj.stats.returns[selectedYear];
  }
  let a = 1 + currentObj.stats.returns[selectedYear];
  let b = 1 / cagrYearObject[selectedYear];
  return Math.pow(a, b) - 1;
}

export function SortingBasedOnConditionFunction(
  dataArray,
  sortingConditionObject,
  year
) {
  console.log(sortingConditionObject);
  if (!sortingConditionObject.active) return Array.from(dataArray);
  if (sortingConditionObject.sortMethod == "High") {
    return Array.from(dataArray).sort(
      (a, b) => b.stats.returns[year] - a.stats.returns[year]
    );
  } else {
    return Array.from(dataArray).sort(
      (a, b) => a.stats.returns[year] - b.stats.returns[year]
    );
  }
}

// for (let key in filterList) {
//   let value = filterList[key];

//   if (
//     value === null ||
//     value === 0 ||
//     value.size == 0 ||
//     value.length == 0 ||
//     key == "popualarity" ||
//     key == "minimumAmount" ||
//     key == "cagrYear" ||
//     key == "recentlyRebalanced" ||
//     value === false
//   ) {
//     continue;
//   }
//   if (value instanceof Set) {
//     x += value.size;
//   } else if (Array.isArray(value)) {
//     x += value.length;
//   } else {
//     x++;
//   }
// }
