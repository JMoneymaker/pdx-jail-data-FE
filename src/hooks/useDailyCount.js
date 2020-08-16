import { useState, useEffect } from 'react';
import { getDailyCount } from '../services/getDailyCounts';
import useUpDated from './useUpDated';

const useDailyCount = ({ category, county }) => {
  const [chartData, setChartData] = useState([]);
  const [csv, setCSV] = useState([]);
  const [loading, setLoading] = useState(true);
  const { upDated } = useUpDated();


  const fetchDailyCount = () => {
    setLoading(true);
    getDailyCount('multnomah', 'age')
      .then(setChartData)
      .then(data => makeCSV(data))
      .then(setCSV)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyCount, [county]);

  return [chartData, csv, loading];
};

export default useDailyCount;
