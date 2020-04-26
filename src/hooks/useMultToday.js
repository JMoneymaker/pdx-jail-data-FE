import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findMultToday } from '../utils/dailyCounts';

const useMultToday = () => {
  const [data, setData] = useState('loading');

  const fetchMultToday = () => {
    getDailyCounts()
      .then(findMultToday)
      .then(setData);
  };

  useEffect(fetchMultToday, []);
  return { data };
};

export default useMultToday;
