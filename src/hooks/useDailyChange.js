import { useState, useEffect } from 'react';
import { getDailyDetentionCounts } from '../services/getDetentions';
import { calculateDailyChange } from '../utils/dailyCounts';

const useDailyChange = () => {
  const [data, setData] = useState(0);

  const fetchDailyChange = () => {
    getDailyDetentionCounts()
      .then(calculateDailyChange)
      .then(setData);  
  };

  useEffect(fetchDailyChange, []);
  return { data };
};

export default useDailyChange;
