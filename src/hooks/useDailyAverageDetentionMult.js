import { useState, useEffect } from 'react';
import { getDailyAverageDetentionByRace } from '../services/getDailyAverages';
import { shapeMultDetAvg, shapeClackDetAvg, shapeWashDetAvg } from '../utils/dailyAverages';


const useDailyAverageDetentionByRace = county => {
  const [average, setAverage] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAverageDetentionByRace = () => {      setLoading(true);
    getDailyAverageDetentionByRace(county)
      .then((county === 'multnomah') ? shapeMultDetAvg
        : (county === 'clackamas') ? shapeClackDetAvg
          : shapeWashDetAvg)
      .then(setAverage)
      .finally(() => setLoading(false));  
  };

  useEffect(fetchDailyAverageDetentionByRace, [county]);
  return [average, loading];
};

export default useDailyAverageDetentionByRace;
