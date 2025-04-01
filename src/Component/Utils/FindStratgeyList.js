export async function fetchAllJsonData() {
  try {
    let res = await fetch("/Json/smallcases.json");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    let data = await res.json();
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

export function calculateFilter(filterList) {
  let count = 0;
  for (let key in filterList) {
    let value = filterList[key];
    if (
      value[0] == "Show All" ||
      value.length == 0 ||
      value.size == 0 ||
      value == false ||
      0
    ) {
      continue;
    }
    if (value.length > 0) count = count + value.length;
    else if (value.size > 0) count = count + value.size;
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
  sortingConditionObject
) {
  let data = Array.from(dataArray);
  console.log(sortingConditionObject);

  if (sortingConditionObject.activeSortingWay === "Popularity") {
    data = popularity(data);
  }
  if (sortingConditionObject.activeSortingWay === "Recently Rebalanced") {
    data = sortingBasedOnrecentlyRebalanced(data);
  }
  if (sortingConditionObject.activeSortingWay === "Min Investment Amount") {
    data = minimumAmountSorting(data);
  }
  if (sortingConditionObject.activeSortingWay === "Cagr") {
    let year = sortingConditionObject.cagrYear;
    data = sortingBasedOnHighAndLow(
      data,
      year,
      sortingConditionObject.sortMethod
    );
  }
  return data;
}
function popularity(dataArray) {
  return dataArray.sort(
    (a, b) => a.brokerMeta.flags.popular.rank - b.brokerMeta.flags.popular.rank
  );
}
function minimumAmountSorting(dataArray) {
  return dataArray.sort(
    (a, b) => a.stats.minInvestAmount - b.stats.minInvestAmount
  );
}
function sortingBasedOnrecentlyRebalanced(dataArray) {
  return dataArray.sort(
    (a, b) => new Date(b.info.lastRebalanced) - new Date(a.info.lastRebalanced)
  );
}
function sortingBasedOnHighAndLow(data, year, method) {
  console.log(method, year);
  if (method === "High") {
    return data.sort((a, b) => b.stats.returns[year] - a.stats.returns[year]);
  } else {
    return data.sort((a, b) => a.stats.returns[year] - b.stats.returns[year]);
  }
}
