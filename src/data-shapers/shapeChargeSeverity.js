export const shapeChargeSeverity = res => {
  let ordering = {},
    sortOrder = [
      'A Felony', 
      'B Felony', 
      'C Felony', 
      'U Felony', 
      'A Misdemeanor', 
      'B Misdemeanor', 
      'C Misdemeanor', 
      'U Misdemeanor', 
      'U Unknown'];
  for(let i = 0; i < sortOrder.length; i++)
    ordering[sortOrder[i]] = i;
  res.sort(function(a, b) {
    return (ordering[b._id] - ordering[a._id]);
  });
  return res;
};
  
// export const shapeChargeSeverity = res => {
//   const sortedArray = sortSeverity(res);
//   return sortedArray.map(item => {
//     return ({
//       x: item._id,
//       y: item.total
//     });
//   });
// };
