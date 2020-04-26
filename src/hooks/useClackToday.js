import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findClackToday } from '../utils/dailyCounts';

const useClackToday = () => {
  const [data, setData] = useState('loading');

  const fetchClackToday = () => {
    getDailyCounts()
      .then(findClackToday)
      .then(setData);
  };

  useEffect(fetchClackToday, []);
  return { data };
};

export default useClackToday;
