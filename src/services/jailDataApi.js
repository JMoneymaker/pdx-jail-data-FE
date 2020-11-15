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

export const getDailyPopulationTotals = (signal) => {
  return fetch('http://157.245.170.56/api/v1/dailyTotals', signal)
    .then(res => res.json())
    .then(data => (data.counts));
};

export const getMostRecentUpdate = () => {
  return fetch('http://157.245.170.56/api/v1/multnomah/mostRecent')
    .then(res => res.json())
    .then(res => res[0].createdAt);
};
