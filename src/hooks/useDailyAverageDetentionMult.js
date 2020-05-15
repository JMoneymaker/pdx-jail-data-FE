import { useState, useEffect } from 'react';
import { dailyDetentionAverageByRace } from '../services/getTriCountyDaily';

const useMultDailyAverage = () => {
  const [average, setAverage] = useState('0');

  const fetchMultAverage = () => {
    dailyDetentionAverageByRace()
      .then(setAverage);  
  };

  useEffect(fetchMultAverage, []);
  return { average };
};

export default useMultDailyAverage;
