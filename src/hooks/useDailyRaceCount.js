import { useState, useEffect } from 'react';
import { getDailyRaceCount } from '../services/getDailyCounts';
import { shapeMult, shapeClack, shapeWash } from '../utils/dailyCounts';

const useDailyRaceCount = county => {
  const [raceData, setRaceData] = useState([]);

  const fetchDailyRaceCount = () => {
    getDailyRaceCount(county)
      .then((county === 'multnomah') ? shapeMult
        : (county === 'clackamas') ? shapeClack
          : shapeWash)
      .then(setRaceData);
  };

  useEffect(fetchDailyRaceCount, [county]);

  return raceData;
};

export default useDailyRaceCount;
