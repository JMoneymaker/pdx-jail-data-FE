export const calculateDailyChange = (dailyTotalsArray) => {
  const countsArray = dailyTotalsArray.counts;
  const iY = countsArray.length - 2;
  const iT = countsArray.length - 1;

  const yCount = countsArray[iY].count;
  const tCount = countsArray[iT].count;
  const dailyChange = tCount - yCount;

  return dailyChange;
};
