// let numbers = [0, 1, 2, 3, 10, 20, 30];
// numbers.sort((a, b) => a - b);

const moment = require('moment');
moment().format();

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

  return moment(lastUpdated).format('MMMM Do YYYY, h:mm a');
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

export const shapeMult = res => {
  return alphabetize(res)
    .map(item => {
      if(item._id === 'P'){
        item._id = 'Pacific Islander';
      } return item;
    })
    .map(item => {
      return ({
        x: item._id,
        y: item.total
      });
    });
};

export const shapeWash = res => {
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
        y: item.total
      });
    });
};

export const shapeAgency = res => {
  return alphabetize(res)
    .map(item => {
      if(item._id === 'Portland Police, North Precinct'){
        item._id = 'PPB, North Precinct';
      } else if(item._id === 'Portland Police, Central Precinct'){
        item._id = 'PPB, Central Precinct';
      } else if(item._id === 'Portland Police, East Precinct'){
        item._id = 'PPB, East Precinct';
      } else if(item._id === 'Portland Police, Other'){
        item._id = 'PPB, Other';
      } else if(item._id === 'Multnomah County Sheriff Booking'){
        item._id = 'MCSO Booking';
      } else if(item._id === 'Gresham Police Department'){
        item._id = 'Gresham PD';
      } else if(item._id === 'Drug Enforcement Administration'){
        item._id = 'DEA';
      } else if(item._id === 'WASHINGTON COUNTY COMM CORR'){
        item._id = 'WACO COMM CORR';
      } else if(item._id === 'SO WASHINGTON COUNTY JAIL'){
        item._id = 'SO WACO JAIL';
      } else if(item._id === 'SO WASHINGTON COUNTY'){
        item._id = 'WACO SO';
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

export const shapeAge = res => {
  return res
    .map(item => {
      if(item._id === 0){
        item._id = 'Under 18';
      } else if(item._id === 18){
        item._id = '18 - 20';
      } else if(item._id === 21){
        item._id = '21 - 25';
      } else if(item._id === 26){
        item._id = '26 - 30';
      } else if(item._id === 31){
        item._id = '31 - 35';
      } else if(item._id === 36){
        item._id = '36 - 40';
      } else if(item._id === 41){
        item._id = '41 - 45';
      } else if(item._id === 46){
        item._id = '46 - 50';
      } else if(item._id === 51){
        item._id = '51 - 60';
      } else if(item._id === 56){
        item._id = '56 - 60';
      } else if(item._id === 61){
        item._id = '61 - 65';
      } else {
        item._id = 'Over 65';
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

export const shapeChargeSeverity = res => {
  return res.map(item => {
    return ({
      x: item._id,
      y: item.category
    });
  });
};

export const shapeChargeDescription = res => {
  return res.map((item, i) => {
    while(i <= 19)
      return ({
        x: item._id,
        y: item.description
      });
    return null;
  });
};


