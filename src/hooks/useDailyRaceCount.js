import { useState, useEffect } from 'react';
import { getDailyRaceCount } from '../services/getDailyCounts';
import { shapeMult, shapeClack, shapeWash } from '../utils/dailyCounts';

const useDailyRaceCount = county => {
  const [raceData, setRaceData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyRaceCount = () => {
    setLoading(true);
    getDailyRaceCount(county)
      .then((county === 'multnomah') ? shapeMult
        : (county === 'clackamas') ? shapeClack
          : shapeWash)
      .then(setRaceData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyRaceCount, [county]);

  return [raceData, loading];
};

export default useDailyRaceCount;
