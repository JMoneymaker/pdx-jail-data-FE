import { useState, useEffect } from 'react';
import { getDailyAgeCount } from '../services/getDailyCounts';
import { shapeAge } from '../utils/dailyCounts';

const useDailyAge = county => {
  const [ageData, setAgeData] = useState([]);

  const fetchDailyAge = () => {
    getDailyAgeCount(county)
      .then(shapeAge)
      .then(setAgeData);
  };

  useEffect(fetchDailyAge, [county]);

  return ageData;
};

export default useDailyAge;
