import { useState, useEffect } from 'react';
import { findTwoDayTotals } from '../../data-shapers/findTwoDayTotals';
import dailyPopulationTotals from '../../data/dailyPopulationTotals.json';

const useMainStats = () => {
  const [today, setToday] = useState({});
  const [yesterday, setYesterday] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchTriCountyTrend = () => {
    setLoading(true);
    let totals = findTwoDayTotals(dailyPopulationTotals.counts);
    setToday(totals[0]);
    setYesterday(totals[1]);
    setLoading(false);
  };
  
  useEffect(fetchTriCountyTrend, []);

  return [today, yesterday, loading];
};

export default useMainStats;


