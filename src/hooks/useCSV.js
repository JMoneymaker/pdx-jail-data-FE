import { useState, useEffect } from 'react';
import { getCSV } from '../services/getCSV';
import dummyData from '../data/daily-counts';

const useCSV = () => {
  const [downLoadData, setDownLoadData] = useState([dummyData]);

  const fetchCSV = () => {
    getCSV()
    //shape CSV?
      .then(setDownLoadData);
  };

  useEffect(fetchCSV, []);
  console.log(downLoadData);
  return downLoadData;
};

export default useCSV;
