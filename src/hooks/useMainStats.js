import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/jailDataApi';
import { findTwoDayTotals } from '../data-shapers/findTwoDayTotals';

const useMainStats = () => {
  const [today, setToday] = useState({});
  const [yesterday, setYesterday] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchTriCountyTrend = () => {
    setLoading(true);
    getDailyCounts()
      .then(res => findTwoDayTotals(res))
      .then(totals => {
        setToday(totals[0]);
        setYesterday(totals[1]);
      })
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchTriCountyTrend, []);

  return [today, yesterday, loading];
};

export default useMainStats;


