export const getDailyAgeCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyAgeCount`)
    .then(res => res.json());
};

export const getDailyAgencyCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyAgencyCount`)
    .then(res => res.json());
};

export const getDailyFacilityCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyFacilityCount`)
    .then(res => res.json());
};

export const getDailyGenderCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyGenderCount`)
    .then(res => res.json());
};

export const getDailyRaceCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyRaceCount`)
    .then(res => res.json());
};

export const getDailyCount = (county, category) => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/daily${category}Count`)
    .then(res => res.json());
};

export const getDailyChargeSeverityCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyChargeCategory`)
    .then(res => res.json());
};

export const getDailyChargeDescriptions = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyChargeDescriptions`)
    .then(res => res.json());
};

export const getDailyTopCharges = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/top20charges`)
    .then(res => res.json());
};
