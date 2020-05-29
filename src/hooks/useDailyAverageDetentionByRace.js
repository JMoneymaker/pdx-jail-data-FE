import { useState, useEffect } from 'react';
import { getDailyAverageDetentionByRace } from '../services/getDailyAverages';
import { shapeMultDetAvg, shapeClackDetAvg, shapeWashDetAvg } from '../utils/dailyAverages';


const useDailyAverageDetentionByRace = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAverageDetentionByRace = () => {      setLoading(true);
    getDailyAverageDetentionByRace(county)
      .then((county === 'multnomah') ? shapeMultDetAvg
        : (county === 'clackamas') ? shapeClackDetAvg
          : shapeWashDetAvg)
      .then(setData)
      .finally(() => setLoading(false));  
  };

  useEffect(fetchDailyAverageDetentionByRace, [county]);
  return [data, loading];
};

export default useDailyAverageDetentionByRace;
