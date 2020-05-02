import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { calculateClackChange } from '../utils/dailyCounts';

const useClackChange = () => {
  const [change, setChange] = useState('0');

  const fetchClackChange = () => {
    getDailyCounts()
      .then(calculateClackChange)
      .then(setChange);  
  };

  useEffect(fetchClackChange, []);
  return { change };
};

export default useClackChange;
