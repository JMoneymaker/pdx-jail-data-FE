export const getDailyAgeCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/clackamas/dailyAgeCount')
    .then(res => res.json());
};

export const getDailyFacilityCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/clackamas/dailyFacilityCount')
    .then(res => res.json());
};

export const getDailyRaceCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/clackamas/dailyRaceCount')
    .then(res => res.json());
};

