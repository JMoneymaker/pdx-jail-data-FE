import { useState, useEffect } from 'react';
import { getDailyDetentionCounts } from '../services/getDetentions';
import { findTodayTotal } from '../utils/dailyCounts';

const useDailyTotal = () => {
  const [data, setData] = useState('loading');

  const fetchDailyTotal = () => {
    getDailyDetentionCounts()
      .then(findTodayTotal)
      .then(setData);
  };

  useEffect(fetchDailyTotal, []);
  return { data };
};

export default useDailyTotal;
