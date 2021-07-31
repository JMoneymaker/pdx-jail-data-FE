import { useState, useEffect, useContext } from 'react';
import { shapeTrend } from '../../data-shapers/makeCountyTrendArrays';
import { makeTrendCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';
import dailyPopulationTotals from '../../data/dailyPopulationTotals.json';

const useTriCountyTotals = () => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  

  const fetchTriCountyTrend = () => {
    setLoading(true);
    setData(shapeTrend(dailyPopulationTotals.counts));
    setCSV(makeTrendCSV(dailyPopulationTotals.counts, updated, 'trend'));
    setLoading(false);
  };
  
  useEffect(fetchTriCountyTrend, []);

  return [data, csv, loading];
};

export default useTriCountyTotals;
