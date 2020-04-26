export const calculateMultChange = counts => {
  
  const yesterday = findMultYesterday(counts);
  const today = findMultToday(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+' + dailyChange : dailyChange;
};

export const calculateWashChange = counts => {
  
  const yesterday = findWashYesterday(counts);
  const today = findWashToday(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+' + dailyChange : dailyChange;
};

export const calculateClackChange = counts => {
  
  const yesterday = findClackYesterday(counts);
  const today = findClackToday(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+' + dailyChange : dailyChange;
};

const findMultYesterday = res => {
  const counts = res[0].counts;
  const iY = counts.length - 2;
  return counts[iY].mult;
};

const findClackYesterday = res => {
  const counts = res[0].counts;
  const iY = counts.length - 2;
  return counts[iY].clack;
};

const findWashYesterday = res => {
  const counts = res[0].counts;
  const iY = counts.length - 2;
  return counts[iY].wash;
};

export const findMultToday = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  return counts[iT].mult;
};

export const findClackToday = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  return counts[iT].clack;
};

export const findWashToday = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  return counts[iT].wash;
};
