import { useState, useEffect } from 'react';
import { getTriCountyDaily } from '../services/getTriCountyDaily';
import { shapeTrend } from '../utils/trends';

const useTrendTriCountyTotals = () => {
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTriCountyTrendTotals = () => {
    setLoading(true);
    getTriCountyDaily()
      .then(shapeTrend)
      .then(setTrendData)
      .finally(() => setLoading(false));
  };
  
  console.log(trendData, 'hook');
  useEffect(fetchTriCountyTrendTotals, []);

  return [trendData, loading];
};

export default useTrendTriCountyTotals;
