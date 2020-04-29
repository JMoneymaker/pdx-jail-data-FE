import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getDailyCounts';
import { findUpDate } from '../utils/dailyCounts';

const useUpDated = () => {
  const [upDated, setUpDated] = useState('loading');

  const fetchWashToday = () => {
    getDailyCounts()
      .then(findUpDate)
      .then(setUpDated);
  };

  useEffect(fetchWashToday, []);
  return { upDated };
};

export default useUpDated;
