export const getDailyAgeCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/washington/dailyAgeCount')
    .then(res => res.json());
};
  
export const getDailyFacilityCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/washington/dailyFacilityCount')
    .then(res => res.json());
};

export const getDailyRaceCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/washington/dailyRaceCount')
    .then(res => res.json());
};

export const getDailyAgencyCount = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/washington/dailyAgencyCount')
    .then(res => res.json());
};
    
  
