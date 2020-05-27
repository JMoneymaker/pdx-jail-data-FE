export const getDailyAverageDetentionByRace = county => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyDetentionAverageByRace`)
    .then(res => res.json());
};
