import { useState, useEffect } from 'react';
import { getCSV } from '../services/getCSV';
import { makeCSVData } from '../utils/dailyCounts';

const useCSV = () => {
  const [data, setData] = useState([]);

  const fetchCSV = () => {
    getCSV()
      .then(makeCSVData)
      .then(setData);
  };

  useEffect(fetchCSV, []);
  return data;
};

export default useCSV;
