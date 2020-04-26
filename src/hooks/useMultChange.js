import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { calculateMultChange } from '../utils/dailyCounts';

const useMultChange = () => {
  const [data, setData] = useState('loading');

  const fetchMultChange = () => {
    getDailyCounts()
      .then(calculateMultChange)
      .then(setData);  
  };

  useEffect(fetchMultChange, []);
  return { data };
};

export default useMultChange;
