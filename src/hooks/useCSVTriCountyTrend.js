import { useState, useEffect } from 'react';
import { getCSVTriCountyTrend } from '../services/getCSV';
import { makeCSVTriCountyTrend } from '../utils/dailyCounts';

const useCSVTriCountyTrend = () => {
  const [data, setData] = useState([]);

  const fetchCSV = () => {
    getCSVTriCountyTrend()
      .then(makeCSVTriCountyTrend)
      .then(setData);
  };

  useEffect(fetchCSV, []);
  return data;
};

export default useCSVTriCountyTrend;
