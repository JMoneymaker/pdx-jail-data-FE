import { useState, useEffect } from 'react';
import { getTwoDayTotal } from '../services/jailDataApi';
// import { shapeTrend } from '../data-shapers/makeCountyTrendArrays';
// import { makeTrendCSV } from '../data-shapers/makeCSV';
// import { UpdatedContext } from './useUpdatedContext';

const useTriCountyTrend = () => {
  const [clackToday, setClackToday] = useState(0);
  const [clackChange, setClackChange] = useState(0);
  const [multToday, setMultToday] = useState(0);
  const [multChange, setMultChange] = useState(0);
  const [washToday, setWashToday] = useState(0);
  const [washChange, setWashChange] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchTriCountyTrend = () => {
    setLoading(true);
    getTwoDayTotal('clackamas')
      .then(res => {
        setClackToday(res.today);
        setClackChange(res.today - res.yesterday);
      })
      .then(getTwoDayTotal('multnomah')
        .then(res => {
          setMultToday(res.today);
          setMultChange(res.today - res.yesterday);
        }))
      .then(getTwoDayTotal('washington')
        .then(res => {
          setWashToday(res.today);
          setWashChange(res.today - res.yesterday);
        }))
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchTriCountyTrend, []);

  return [clackToday, clackChange, multToday, multChange, washToday, washChange, loading];
};

export default useTriCountyTrend;
