import { useState, useEffect, useContext } from 'react';
import { getDailyPopulationTotals } from '../services/jailDataApi';
import { shapeTrend } from '../data-shapers/makeCountyTrendArrays';
import { makeTrendCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';

const useTriCountyTotals = () => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  

  const fetchTriCountyTrend = () => {
    setLoading(true);
    getDailyPopulationTotals(signal)
      .then(res => {
        setData(shapeTrend(res));
        setCSV(makeTrendCSV(res, updated, 'trend'));
      })
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchTriCountyTrend, []);

  return [data, csv, loading];
};

export default useTriCountyTotals;
