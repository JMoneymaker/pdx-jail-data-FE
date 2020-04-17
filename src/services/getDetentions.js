export const getDailyDetentionCounts = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json());
};
