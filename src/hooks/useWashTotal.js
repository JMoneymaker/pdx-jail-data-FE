import React, { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { findWashToday } from '../utils/dailyCounts';
import Loading from '../components/common/Loading';

const useWashTotal = () => {
  const [total, setTotal] = useState(<Loading />);

  const fetchWashToday = () => {
    getDailyCounts()
      .then(findWashToday)
      .then(setTotal);
  };

  useEffect(fetchWashToday, []);
  return { total };
};

export default useWashTotal;
