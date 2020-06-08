import { useState, useEffect } from 'react';
import { getDailyGenderCount } from '../services/getDailyCounts';
import { shapeGender } from '../utils/dailyCounts';

const useDailyCountGender = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyGenderCount = () => {
    setLoading(true);
    getDailyGenderCount(county)
      .then(shapeGender)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyGenderCount, [county]);

  return [data, loading];
};

export default useDailyCountGender;
