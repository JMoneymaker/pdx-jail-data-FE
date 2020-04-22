export const calculateDailyChange = (counts) => {

  const yesterday = findYesterdayTotal(counts);
  const today = findTodayTotal(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+ ' + dailyChange : dailyChange;
  
};

const findYesterdayTotal = ({ counts }) => {
  const iY = counts.length - 2;
  return counts[iY].count;
};

export const findTodayTotal = ({ counts }) => {
  const iT = counts.length - 1;
  return counts[iT].count;
};
