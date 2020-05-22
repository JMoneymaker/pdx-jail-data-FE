import { useState, useEffect } from 'react';
import { dailyDetentionAverageByRace } from '../services/getTriCountyDaily';

const useDailyAverage = () => {
  const [average, setAverage] = useState('0');

  const fetchDailyAverage = () => {
    dailyDetentionAverageByRace()
      .then(setAverage);  
  };

  useEffect(fetchDailyAverage, []);
  return { average };
};

export default useDailyAverage;
