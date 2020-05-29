import { useState, useEffect } from 'react';
import { getDailyAgeCount } from '../services/getDailyCounts';
import { shapeAge } from '../utils/dailyCounts';

const useDailyAge = county => {
  const [ageData, setAgeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAge = () => {
    setLoading(true);
    getDailyAgeCount(county)
      .then(shapeAge)
      .then(setAgeData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyAge, [county]);

  return [ageData, loading];
};

export default useDailyAge;
