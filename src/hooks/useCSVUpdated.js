import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/getTriCountyDaily';
import { findCSVUpDate } from '../utils/dailyCounts';

const useCSVUpdated = () => {
  const [upDated, setUpDated] = useState();

  const fetchWashToday = () => {
    getDailyCounts()
      .then(findCSVUpDate)
      .then(setUpDated);
  };

  useEffect(fetchWashToday, []);
  return upDated;
};

export default useCSVUpdated;
