import React, { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { findClackToday } from '../utils/dailyCounts';
import Loading from '../components/common/Loading';

const useClackTotal = () => {
  const [total, setTotal] = useState(<Loading />);

  const fetchClackToday = () => {
    getDailyCounts()
      .then(findClackToday)
      .then(setTotal);
  };

  useEffect(fetchClackToday, []);
  return { total };
};

export default useClackTotal;
