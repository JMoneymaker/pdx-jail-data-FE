import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { calculateMultChange } from '../utils/dailyCounts';

const useMultChange = () => {
  const [change, setChange] = useState('0');

  const fetchMultChange = () => {
    getDailyCounts()
      .then(calculateMultChange)
      .then(setChange);  
  };

  useEffect(fetchMultChange, []);
  return { change };
};

export default useMultChange;
