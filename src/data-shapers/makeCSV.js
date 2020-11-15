export const makeCSV = (data, county, updated, category) => {
  return ({
    fileName: `jdpdx-daily${category}Count-${county}-${updated}.csv`,
    data: data.map(object => {
      return ({
        date: updated,
        county: county,
        [category]: object._id,
        count: object.total
      });
    })
  });
};

export const makeTrendCSV = (data, updated, category) => {
  return ({
    fileName: `jdpdx-daily${category}Count-${updated}.csv`,
    data: data.map(object => {
      return ({
        date: object.date,
        Clackamas: object.clack,
        Multnomah: object.mult,
        Washington: object.wash
      });
    })
  });
};
