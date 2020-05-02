export const getDailyCounts = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json());
};
