import { useState, useEffect } from 'react';
import { getDailyAverageDetentionByRace } from '../services/getDailyAverages';
import { shapeMultDetAvg, shapeClackDetAvg, shapeWashDetAvg } from '../utils/dailyAverages';


const useDailyAverageDetentionByRace = county => {
  const [average, setAverage] = useState([]);

  const fetchDailyAverageDetentionByRace = () => {
    getDailyAverageDetentionByRace(county)
      .then((county === 'multnomah') ? shapeMultDetAvg
        : (county === 'clackamas') ? shapeClackDetAvg
          : shapeWashDetAvg)
      .then(setAverage);  
  };

  useEffect(fetchDailyAverageDetentionByRace, [county]);
  return average;
};

export default useDailyAverageDetentionByRace;
