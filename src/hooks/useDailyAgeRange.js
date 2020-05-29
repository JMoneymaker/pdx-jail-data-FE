import { useState, useEffect } from 'react';
import { getDailyAgeCount } from '../services/getDailyCounts';
import { shapeAge } from '../utils/dailyCounts';

const useDailyAge = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAge = () => {
    setLoading(true);
    getDailyAgeCount(county)
      .then(shapeAge)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyAge, [county]);

  return [data, loading];
};

export default useDailyAge;
