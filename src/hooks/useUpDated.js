import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/jailDataApi';
import { findUpDate } from '../utils/dailyCounts';

const useUpDated = () => {
  const [upDated, setUpDated] = useState('loading');

  const fetchDailyCount = () => {
    getDailyCounts()
      .then(findUpDate)
      .then(setUpDated);
  };

  useEffect(fetchDailyCount, []);
  
  return upDated;
};

export default useUpDated;
