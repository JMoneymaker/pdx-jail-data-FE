import { useState, useEffect } from 'react';
import { getDailyRaceCount } from '../services/getDailyCounts';
import { vForVictory } from '../utils/dailyCounts';

const useDailyRaceCount = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyRaceCount = () => {
    setLoading(true);
    getDailyRaceCount(county)
      .then(res => vForVictory(res))
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyRaceCount, [county]);

  return [data, loading];
};

export default useDailyRaceCount;
