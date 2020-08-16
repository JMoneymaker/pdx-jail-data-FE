import { useState, useEffect } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { vForVictory } from '../utils/dailyCounts';
import { makeCSV } from '../utils/makeCSV';

const useDailyCountGender = (county) => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

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
