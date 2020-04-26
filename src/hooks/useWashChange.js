import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { calculateWashChange } from '../utils/dailyCounts';

const useWashChange = () => {
  const [data, setData] = useState('loading');

  const fetchWashChange = () => {
    getDailyCounts()
      .then(calculateWashChange)
      .then(setData);  
  };

  useEffect(fetchWashChange, []);
  return { data };
};

export default useWashChange;
