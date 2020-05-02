import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { calculateWashChange } from '../utils/dailyCounts';

const useWashChange = () => {
  const [change, setChange] = useState('0');

  const fetchWashChange = () => {
    getDailyCounts()
      .then(calculateWashChange)
      .then(setChange);  
  };

  useEffect(fetchWashChange, []);
  return { change };
};

export default useWashChange;
