import React, { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { findMultToday } from '../utils/dailyCounts';
import Loading from '../components/common/Loading';

const useMultTotal = () => {
  const [total, setTotal] = useState(<Loading />);

  const fetchMultToday = () => {
    getDailyCounts()
      .then(findMultToday)
      .then(setTotal);
  };
  useEffect(fetchMultToday, []);
  return { total };
};

export default useMultTotal;
