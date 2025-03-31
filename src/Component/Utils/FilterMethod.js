function findSubscription(typeOfSubscription, data) {
  if (typeOfSubscription[0] == "Show All") return data;
  let value = typeOfSubscription[0] == "Fee Based" ? true : false;
  let arr = data.filter((ele) => {
    if (ele.flags.private === value) {
      return true;
    }
  });
  return arr;
}
function investmentAmount(price, otherFilterData) {
  if (price == null || price == 0) return otherFilterData;
  return otherFilterData.filter((ele) => {
    let stats = ele.stats;
    // console.log(stats.minInvestAmount);
    if (stats.minInvestAmount <= price) {
      return true;
    }
  });
}
function volatility(type, otherFilterData) {
  // console.log(type);
  if (type.size == 0) return otherFilterData;
  let filters = Array.from(type);
  return otherFilterData.filter((ele) => {
    let volatility = ele.stats.ratios.riskLabel;
    let res = filters.find((ele) => ele == volatility);
    if (volatility == res) {
      return true;
    }
  });
}
function investmentStragecy(listOfStrategy, otherFilterData) {
  if (listOfStrategy.length === 0) return otherFilterData;
  return otherFilterData.filter((ele) => {
    let stratgeyInvolveInElement = ele.info.investmentStrategy;
    let check = false;
    for (let index = 0; index < listOfStrategy.length; index++) {
      const element = listOfStrategy[index];
      if (stratgeyInvolveInElement.find((val) => val.displayName == element)) {
        check = true;
        break;
      }
    }
    if (check) return check;
  });
}
function popularity(dataArray) {
  console.log(dataArray);

  dataArray.sort(
    (a, b) => a.brokerMeta.flags.popular.rank - b.brokerMeta.flags.popular.rank
  );
}
function minimumAmountSorting(dataArray) {
  dataArray.sort((a, b) => a.stats.minInvestAmount - b.stats.minInvestAmount);
}
function sortingBasedOnrecentlyRebalanced(dataArray) {
  dataArray.sort(
    (a, b) => new Date(b.info.lastRebalanced) - new Date(a.info.lastRebalanced)
  );
}
function includeNewSmallCase(dataArray, specificTime) {
  return dataArray.filter((ele) => {
    let launchDate = ele.info.created;
    console.log(launchDate);
    let date = new Date(launchDate);
    return date.getTime() >= new Date(specificTime).getTime();
  });
}
export default function applyFilterMethods(filterList, data) {
  // console.log(data, "haaa");

  let arr = data;
  let answer = new Set();
  arr = findSubscription(filterList.subscription, data);
  arr = investmentAmount(filterList.investmentAmount, arr);
  arr = volatility(filterList.volatility, arr);
  arr = investmentStragecy(filterList.investmentStrategy, arr);
  if (filterList.popualarity) popularity(arr);
  if (filterList.minimumAmount) minimumAmountSorting(arr);
  if (filterList.recentlyRebalanced) sortingBasedOnrecentlyRebalanced(arr);
  if (filterList.includeNewSmallcase)
    arr = includeNewSmallCase(arr, "2023-01-01");
  arr.forEach((ele) => {
    answer.add(ele);
  });
  return answer;
}
