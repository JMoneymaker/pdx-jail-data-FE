import { useState, useEffect } from 'react';
import { getTriCountyDaily } from '../services/getTriCountyDaily';
import { shapeTrend } from '../utils/trends';

const useTrendTriCountyTotals = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTriCountyTrendTotals = () => {
    setLoading(true);
    getTriCountyDaily()
      .then(shapeTrend)
      .then(setData)
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchTriCountyTrendTotals, []);

  return [data, loading];
};

export default useTrendTriCountyTotals;
