import AllData from "./FindStratgeyList";
let data = AllData();
let answer = new Set();
function findSubscription(type) {
  let arr = data.filter((ele) => {
    if (ele.flags.private === type) {
      return true;
    }
  });
  return arr;
}
function InvestmentAmount(price, otherFilterData) {
  if (price == null || price == 0) return otherFilterData;
  return otherFilterData.filter((ele) => {
    let stats = ele.stats;
    if (stats.minInvestAmount <= price) {
      return true;
    }
  });
}
function Volatility(type, otherFilterData) {
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
function InvestmentStragecy(listOfStrategy, otherFilterData) {
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
function Popularity(dataArray) {
  dataArray.sort(
    (a, b) => a.brokerMeta.flags.popular.rank - b.brokerMeta.flags.popular.rank
  );
}
function MinimumAmountSorting(dataArray) {
  dataArray.sort((a, b) => a.stats.minInvestAmount - b.stats.minInvestAmount);
}

export default function FilterMethods(filterList) {
  let arr = data;
  let answer = new Set();
  if (filterList.subs == true || filterList.subs == false) {
    arr = findSubscription(filterList.subs);
  }
  arr = InvestmentAmount(filterList.InvestmentAmount, arr);
  arr = Volatility(filterList.Volatility, arr);
  console.log(filterList.InvestmentStrategy);
  arr = InvestmentStragecy(filterList.InvestmentStrategy, arr);
  console.log(arr);

  if (filterList.popualarity) Popularity(arr);

  arr.forEach((ele) => {
    answer.add(ele);
  });
  return answer;
}
