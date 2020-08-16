const moment = require('moment');
moment().format();

export const makePrettyDate = date => {
  return moment(date).format('LLLL');
};

export const findUpDate = res => {
  const iT = res.length - 1;
  const lastUpdated = res[iT].date;

  return moment(lastUpdated).format('MMMM D YYYY, h:mm a');
};

const alphabetize = res => {
  return res.sort((a, b) => {
    if(a._id > b._id) return 1;
    if(a._id < b._id) return -1;
    return 0;
  });
};

export const shapeClack = res => {
  return alphabetize(res)
    .map(item => {
      return ({
        x: item._id.charAt(0).toUpperCase() + item._id.substr(1).toLowerCase(),
        y: item.total
      });
    });
};

export const vForVictory = res => {
  return alphabetize(res)
    .map(item => {
      return ({
        x: item._id,
        y: item.total
      });
    });
};

export const groupByCounty = (array, county) => {
  return array.reduce((acc, obj) => {
    let key = obj[county];
    if(!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, []);
};


const ageMap = {
  0: 'Under 18',
  18: '18 - 20',
  21: '21 - 25',
  26: '26 - 30',
  31: '31 - 35',
  36: '36 - 40',
  41: '41 - 45',
  46: '46 - 50',
  51: '51 - 60',
  56: '56 - 60',
  61: '61 - 65',
};

export const shapeAge = arr => {
  return arr.map(obj => 
    Object.keys(obj).reduce((acc, key) => ({ 
      ...acc, ...{ _id: ageMap[obj._id] || 'Over 65', total: obj[key] }
    }), {})
  ).map(item => {
    return ({
      x: item._id,
      y: item.total
    });
  });
};

export const shapeCSVCharge = res => {
  return res.map((item) => {
    return ({
      x: item._id,
      y: item.total
    });
  });
};

//CSV Shapers

export const makeCSVTriCountyTrend = counts => {
  return counts.map(count => {
    return ({
      date: moment(count.date).format('YYYY-MM-DD'),
      clackamas: count.clackamas,
      multnomah: count.multnomah,
      washington: count.washington
    });
  });
};

export const findCSVUpDate = res => {
  const i = res.length - 1;
  const lastUpdated = res[i].date;
  return moment(lastUpdated).format('YYYY-MM-DD');
};
