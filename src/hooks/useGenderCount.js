import { useState, useEffect, useContext } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { vForVictory } from '../utils/dailyCounts';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';

const useDailyCountGender = (county) => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDailyGenderCount = () => {
    setLoading(true);
    getCategoryCount(county, 'Gender')
      .then(res => {
        setData(vForVictory(res));
        setCSV(makeCSV(res, county, updated, 'gender'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyGenderCount, [county]);

  return [data, csv, loading];
};

export default useDailyCountGender;
