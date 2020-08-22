export const getCountByCategory = (county = 'multnomah', category = 'Agency', signal) => {
  return fetch(`http://157.245.170.56/api/v1/${county}/daily${category}Count`, signal)
    .then(res => res.json());
};

export const getChargeCount = (county = 'multnomah', category = 'ChargeCategory', signal) => {
  return fetch(`http://157.245.170.56/api/v1/${county}/daily${category}`, signal)
    .then(res => res.json());
};

export const getTop20Charges = (county, signal) => {
  return fetch(`http://157.245.170.56/api/v1/${county}/top20charges`, signal)
    .then(res => res.json());
};

export const getDailyCounts = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json())
    .then(([resArray]) => resArray.counts);
};

export const getCSVTriCountyTrend = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/dailyCounts/download')
    .then(res => res.json());
};
