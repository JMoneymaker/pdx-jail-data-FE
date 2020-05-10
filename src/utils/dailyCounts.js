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

export const shapeClack = res => {
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  })
    .map(item => {
      return ({
        //add regex here for spaces
        x: item._id.charAt(0).toUpperCase() + item._id.substr(1).toLowerCase(),
        y: item.total
      });
    });
};

export const shapeMult = res => {
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
        y: item.total
      });
    });
};

export const shapeWash = res => {
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  })
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
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  })
    .map(item => {
      return ({
        x: item._id,
        y: item.total
      });
    });
};

export const shapeFacility = res => {
  return res.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  })
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

