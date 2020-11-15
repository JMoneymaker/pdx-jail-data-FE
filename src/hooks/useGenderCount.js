import { useState, useEffect, useContext } from 'react';
import AbortController from 'abort-controller';
import { getCountByCategory } from '../services/jailDataApi';
import { vForVictory } from '../data-shapers/vForVictory';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';

const useDailyCountGender = (county) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(updated);

  const fetchDailyGenderCount = () => {
    setLoading(true);
    getCountByCategory(county, 'Gender', signal)
      .then(res => {
        setData(vForVictory(res));
        setCSV(makeCSV(res, county, updated, 'gender'));
      })
      .finally(() => setLoading(false));
      
    return () => abortController.abort();

  };

  useEffect(fetchDailyGenderCount, [county]);

  return [data, csv, loading];
};

export default useDailyCountGender;
