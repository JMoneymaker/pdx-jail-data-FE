export const getDailyAgeCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/multnomah/dailyAgeCount')
    .then(res => res.json());
};

export const getDailyFacilityCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/multnomah/dailyFacilityCount')
    .then(res => res.json());
};

export const getDailyRaceCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/multnomah/dailyRaceCount')
    .then(res => res.json());
};

export const getDailyAgencyCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/multnomah/dailyAgencyCount')
    .then(res => res.json());
};
