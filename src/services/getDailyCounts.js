export const getDailyRaceCount = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyRaceCount`)
    .then(res => res.json());
};
