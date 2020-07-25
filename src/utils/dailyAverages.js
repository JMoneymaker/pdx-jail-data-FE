const alphabetize = res => {
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  });
};

const convertMils = longNumber => {
  return Math.ceil(longNumber / (60 * 60 * 24 * 1000));
};

export const shapeDetAvg = res => {
  return alphabetize(res)
    .map(item => {
      return ({
        x: item._id,
        y: convertMils(item.avgDifference)
      });
    });
};


