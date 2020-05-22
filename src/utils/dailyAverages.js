export const shapeMultDetAvg = res => {
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  })
    .map(item => {
      if(item._id === 'P'){
        item._id = 'Pacific Islander';
      } return item;
    })
    .map(item => {
      return ({
        x: item._id,
        y: convertMils(item.avgDifference)
      });
    });
};

const convertMils = (longNumber) => {
  return Math.ceil(longNumber / (60 * 60 * 24 * 1000));
};
