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

// export const getCSVTriCountyTrend = () => {
//   return fetch('https://pdx-jail-data.herokuapp.com/api/v1/dailyCounts/download')
//     .then(res => res.json());
// };

export const getTwoDayTotal = (county, signal) => {
  return fetch(`http://157.245.170.56/api/v1/${county}/twoDayTotals`, signal)
    .then(res => res.json())
    .then(res => ({
      county,
      date: res[0].date,
      time: res[0].time,
      today: res[0].total,
      yesterday: res[1].total,
      change: res[0].total - res[1].total
    }));
};

