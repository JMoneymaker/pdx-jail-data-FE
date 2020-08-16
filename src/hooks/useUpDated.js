import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { findUpDate } from '../utils/dailyCounts';

const useUpDated = () => {
  const [upDated, setUpDated] = useState('loading');

  const fetchDailyCounts = () => {
    getDailyCounts()
      .then(findUpDate)
      .then(setUpDated);
  };

  useEffect(fetchDailyCounts, []);
  return { upDated };
};

export default useUpDated;
