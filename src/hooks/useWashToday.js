import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findWashToday } from '../utils/dailyCounts';

const useWashToday = () => {
  const [data, setData] = useState('loading');

  const fetchWashToday = () => {
    getDailyCounts()
      .then(findWashToday)
      .then(setData);
  };

  useEffect(fetchWashToday, []);
  return { data };
};

export default useWashToday;
