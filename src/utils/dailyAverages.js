const alphabetize = res => {
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  });
};

const convertMils = (longNumber) => {
  return Math.ceil(longNumber / (60 * 60 * 24 * 1000));
};

export const shapeMultDetAvg = res => {
  return alphabetize(res)
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

export const shapeClackDetAvg = res => {
  return alphabetize(res)
    .map(item => {
      return ({
        x: item._id.charAt(0).toUpperCase() + item._id.substr(1).toLowerCase(),
        y: convertMils(item.avgDifference)
      });
    });
};

export const shapeWashDetAvg = res => {
  return alphabetize(res)
    .map(item => {
      if(item._id === 'A'){
        item._id = 'Asian';
      } else if(item._id === 'B'){
        item._id = 'Black';
      } else if(item._id === 'I'){
        item._id = 'Native American';
      } else if(item._id === 'U'){
        item._id = 'Unknown';
      } else if(item._id === 'W'){
        item._id = 'White';
      } 
      return item;
    })
    .map(item => {
      return ({
        x: item._id,
        y: convertMils(item.avgDifference)
      });
    });
};


