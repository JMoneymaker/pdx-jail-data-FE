import { useState, useEffect } from 'react';
import { getDailyGenderCount } from '../services/getDailyCounts';
import { groupByCounty } from '../utils/dailyCounts';

const useDailyCountGender = () => {
  const [clack, setClack] = useState([]);
  const [mult, setMult] = useState([]);
  const [wash, setWash] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyGenderCount = () => {
    setLoading(true);
    getDailyGenderCount()
      .then(res => groupByCounty(res, 'county'))
      .then(res => {
        setClack(res.Clackamas), 
        setMult(res.Multnomah), 
        setWash(res.Washington);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyGenderCount, []);

  return [clack, mult, wash, loading];
};

export default useDailyCountGender;
