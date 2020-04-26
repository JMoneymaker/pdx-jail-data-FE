import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { calculateClackChange } from '../utils/dailyCounts';

const useClackChange = () => {
  const [data, setData] = useState('loading');

  const fetchClackChange = () => {
    getDailyCounts()
      .then(calculateClackChange)
      .then(setData);  
  };

  useEffect(fetchClackChange, []);
  return { data };
};

export default useClackChange;
