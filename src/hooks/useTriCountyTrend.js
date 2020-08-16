import { useState, useEffect } from 'react';
import { getDailyCounts } from '../services/jailDataApi';
import { shapeTrend } from '../utils/trends';
import { makeTrendCSV } from '../data-shapers/makeCSV';

const useTriCountyTrend = () => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const fetchTriCountyTrend = () => {
    setLoading(true);
    getDailyCounts()
      .then(res => {
        setData(shapeTrend(res));
        setCSV(makeTrendCSV(res, updated, 'charge-category'));
      })
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchTriCountyTrend, []);

  return [data, csv, loading];
};

export default useTriCountyTrend;
