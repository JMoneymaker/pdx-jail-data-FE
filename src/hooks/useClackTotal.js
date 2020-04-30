import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findClackToday } from '../utils/dailyCounts';

const useClackTotal = () => {
  const [total, setTotal] = useState('loading');

  const fetchClackToday = () => {
    getDailyCounts()
      .then(findClackToday)
      .then(setTotal);
  };

  useEffect(fetchClackToday, []);
  return { total };
};

export default useClackTotal;
