const moment = require('moment');
moment().format();

export const makePrettyDate = date => {
  return moment(date).format('LLLL');
};

export const findLatest = res => {
  const [latest] = res.slice(-1);
  const lastUpdated = latest.date;

  return moment(lastUpdated).format('MMMM D YYYY, h:mm a');
};

export const findTwoDayTotals = res => {
  const ti = res.length - 1;
  const yi = res.length - 2;
  const today = res[ti];
  const yesterday = res[yi];

  return [today, yesterday];
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
