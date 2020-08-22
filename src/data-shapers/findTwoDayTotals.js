export const findTwoDayTotals = res => {
  const ti = res.length - 1;
  const yi = res.length - 2;
  const today = res[ti];
  const yesterday = res[yi];

  return [today, yesterday];
};
