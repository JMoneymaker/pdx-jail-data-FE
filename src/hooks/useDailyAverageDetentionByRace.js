import { useState, useEffect } from 'react';
import { getDailyAverageDetentionByRace } from '../services/getDailyAverages';
import { shapeDetAvg } from '../utils/dailyAverages';


const useDailyAverageDetentionByRace = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAverageDetentionByRace = () => {
    setLoading(true);
    getDailyAverageDetentionByRace(county)
      .then(shapeDetAvg)
      .then(setData)
      .finally(() => setLoading(false));  
  };

  useEffect(fetchDailyAverageDetentionByRace, [county]);
  return [data, loading];
};

export default useDailyAverageDetentionByRace;
