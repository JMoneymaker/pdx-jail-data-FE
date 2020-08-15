export const vForVictory = res => {
  return res.map(item => {
    return ({
      x: item._id,
      y: item.total
    });
  });
};
