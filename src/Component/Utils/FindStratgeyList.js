export async function fetchAllJsonData() {
  try {
    let res = await fetch("../../../public/Json/smallcases.json?url");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    let data = await res.json();
    // console.log(data, "klk");

    return data.data;
  } catch (error) {
    console.error("Error fetching JSON:", error);
    return [];
  }
}
let cagrYearObject = {
  threeYear: 3,
  yearly: 1,
  fiveYear: 5,
  montly: false,
  halfYearly: false,
};
export async function strategyList() {
  let newSetForList = new Set();
  let data = await fetchAllJsonData();
  data.forEach((ele) => {
    let listOfStrategy = ele.info.investmentStrategy;
    listOfStrategy.forEach((val) => {
      newSetForList.add(val.displayName);
    });
  });

  return Array.from(newSetForList);
}

// Usage:
strategyList().then(console.log);

export function calculateFilter(filterList) {
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
      (key === "subscription" && value[0] === "Show All") ||
      (key === "investmentAmount" && value === 0) ||
      (key === "volatility" && value.size === 0) ||
      (key === "investmentStrategy" && value.length === 0) ||
      (key === "includeNewSmallcase" && !value)
    ) {
      continue;
    }
    if (key === "volatility") count = count + value.size;
    else if (key == "investmentStrategy") count = count + value.length;
    else count++;
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

export function sortingBasedOnConditionFunction(
  dataArray,
  sortingConditionObject,
  year
) {
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
