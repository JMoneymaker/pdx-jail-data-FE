import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findWashToday } from '../utils/dailyCounts';

const useWashTotal = () => {
  const [total, setTotal] = useState('loading');

  const fetchWashToday = () => {
    getDailyCounts()
      .then(findWashToday)
      .then(setTotal);
  };

  useEffect(fetchWashToday, []);
  return { total };
};

export default useWashTotal;
