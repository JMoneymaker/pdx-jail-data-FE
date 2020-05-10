export const getDailyAgeCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyAgeCount`)
    .then(res => res.json());
};

export const getDailyAgencyCount = agencyCounty => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${agencyCounty}/dailyAgencyCount`)
    .then(res => res.json());
};

export const getDailyFacilityCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyFacilityCount`)
    .then(res => res.json());
};

export const getDailyRaceCount = raceCounty => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${raceCounty}/dailyRaceCount`)
    .then(res => res.json());
};

export const getDailyCount = (county, category) => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/${category}`)
    .then(res => res.json());
};
