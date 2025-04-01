export function handlePopularity(setSortBasedOnCondition) {
  setSortBasedOnCondition((prev) => ({
    ...prev,
    active: false,
    sortMethod: "High",
    activeSortingWay: "Popularity",
  }));
}
export function handleSortingBasedOnMinimumAmount(setSortBasedOnCondition) {
  setSortBasedOnCondition((prev) => ({
    ...prev,
    active: false,
    sortMethod: "High",
    activeSortingWay: "Min Investment Amount",
  }));
}
export function handleCagrYear(year, setSortBasedOnCondition) {
  setSortBasedOnCondition((prev) => ({
    ...prev,
    active: true,
    sortMethod: "High",
    activeSortingWay: "Cagr",
    cagrYear: year,
  }));
}
export function handleRecentlyRebalanced(setSortBasedOnCondition) {
  setSortBasedOnCondition((prev) => ({
    ...prev,
    active: false,
    sortMethod: "High",
    activeSortingWay: "Recently Rebalanced",
  }));
}
