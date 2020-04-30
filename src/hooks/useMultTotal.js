import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findMultToday } from '../utils/dailyCounts';

const useMultTotal = () => {
  const [total, setTotal] = useState('loading');

  const fetchMultToday = () => {
    getDailyCounts()
      .then(findMultToday)
      .then(setTotal);
  };

  useEffect(fetchMultToday, []);
  return { total };
};

export default useMultTotal;
