export const alphabetize = res => {
  return res.sort((a, b) => {
    if(a._id > b._id) return 1;
    if(a._id < b._id) return -1;
    return 0;
  });
};
  
