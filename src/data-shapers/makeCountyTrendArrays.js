export const shapeTrend = rawData => {
  let clackamas = [];
  let washington = [];
  let multnomah = [];

  rawData.map(i => {    
    clackamas.push({
      x: i.date.slice(0, 10),
      y: i.clack });
    multnomah.push({
      x: i.date.slice(0, 10),
      y: i.mult });
    washington.push({
      x: i.date.slice(0, 10),
      y: i.wash });
  });

  return [clackamas, multnomah, washington];
};


