import { useState, useEffect } from 'react';
import { getTriCountyDaily } from '../services/getTriCountyDaily';
import { shapeTrend } from '../utils/trends';

const useTrendTriCountyTotals = () => {
  const [trendData, setTrendData] = useState([]);

  const fetchTriCountyTrendTotals = () => {
    getTriCountyDaily()
      .then(shapeTrend)
      .then(setTrendData);
  };
  
  console.log(trendData, 'hook');
  useEffect(fetchTriCountyTrendTotals, []);

  return trendData;
};

export default useTrendTriCountyTotals;
