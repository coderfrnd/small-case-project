export function handlePopularity(setfilterMethod, setsortBasedOnCondition) {
  setfilterMethod((prev) => ({
    ...prev,
    minimumAmount: false,
    popualarity: true,
    recentlyRebalanced: false,
  }));
  setsortBasedOnCondition((prev) => ({
    ...prev,
    active: false,
    sortMethod: "High",
    activeSortingWay: "Popularity",
  }));
}
export function handleSortingBasedOnMinimumAmount(
  setfilterMethod,
  setsortBasedOnCondition
) {
  setfilterMethod((prev) => ({
    ...prev,
    minimumAmount: true,
    popualarity: false,
    recentlyRebalanced: false,
  }));
  setsortBasedOnCondition((prev) => ({
    ...prev,
    active: false,
    sortMethod: "High",
    activeSortingWay: "Min Investment Amount",
  }));
}
export function handleCagrYear(year, setfilterMethod, setsortBasedOnCondition) {
  setfilterMethod((prev) => ({ ...prev, cagrYear: year }));
  setsortBasedOnCondition((prev) => ({
    ...prev,
    active: true,
    sortMethod: "High",
    activeSortingWay: "Cagr",
  }));
}
export function handleRecentlyRebalanced(
  setfilterMethod,
  setsortBasedOnCondition
) {
  setfilterMethod((prev) => ({
    ...prev,
    recentlyRebalanced: true,
    minimumAmount: false,
    popualarity: false,
  }));
  setsortBasedOnCondition((prev) => ({
    ...prev,
    active: false,
    sortMethod: "High",
    activeSortingWay: "Recently Rebalanced",
  }));
}
export function activeSortingBasedOnCagr(value) {
  setsortBasedOnCondition((prev) => ({
    ...prev,
    sortMethod: value,
  }));
}
