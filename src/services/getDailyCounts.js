export const getDailyCount = (county, category) => {
  return fetch(`http://157.245.170.56/api/v1/${county}/daily${category}Count`)
    .then(res => res.json());
};
