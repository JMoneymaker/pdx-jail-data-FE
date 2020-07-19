const moment = require('moment');
moment().format();

export const makePrettyDate = date => {
  return moment(date).format('LLLL');
};

export const calculateMultChange = counts => {
  
  const yesterday = findMultYesterday(counts);
  const today = findMultToday(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+' + dailyChange : dailyChange;
};

export const calculateWashChange = counts => {
  
  const yesterday = findWashYesterday(counts);
  const today = findWashToday(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+' + dailyChange : dailyChange;
};

export const calculateClackChange = counts => {
  
  const yesterday = findClackYesterday(counts);
  const today = findClackToday(counts);

  const dailyChange = today - yesterday;
  return (dailyChange > 0) ? '+' + dailyChange : dailyChange;
};

const findMultYesterday = res => {
  const counts = res[0].counts;
  const iY = counts.length - 2;
  return counts[iY].mult;
};

const findClackYesterday = res => {
  const counts = res[0].counts;
  const iY = counts.length - 2;
  return counts[iY].clack;
};

const findWashYesterday = res => {
  const counts = res[0].counts;
  const iY = counts.length - 2;
  return counts[iY].wash;
};

export const findMultToday = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  return counts[iT].mult;
};

export const findClackToday = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  return counts[iT].clack;
};

export const findWashToday = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  return counts[iT].wash;
};

export const findUpDate = res => {
  const counts = res[0].counts;
  const iT = counts.length - 1;
  const lastUpdated = counts[iT].date;

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

export const shapeFacility = res => {
  return alphabetize(res)
    .map(item => {
      if(item._id === 'MCDC'){
        item._id = 'Multnomah County' + '\n' + 'Detention Center';
      } else if(item._id === 'MCIJ'){
        item._id = 'Inverness Jail';
      } else if(item._id === 'CC'){
        item._id = 'Community Corrections Center';
      } else if(item._id === 'JL'){
        item._id = 'Washington County Jail';
      } else if(item._id === 'OA'){
        item._id = 'Non-Washington County Facility';
      } else if(!item._id){
        item._id = 'Clackamas County Jail';
      }
      return item;
    })
    .map(item => {
      return ({
        x: item._id,
        y: item.total
      });
    });
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
