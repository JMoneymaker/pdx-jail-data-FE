import { useState, useEffect } from 'react';
import { getDailyAgencyCount } from '../services/getDailyCounts';
import { vForVictory } from '../utils/dailyCounts';

const useDailyAgencyCount = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAgencyCount = () => {
    if(county === 'clackamas'){
      console.log('error');
    } else {
      setLoading(true);
      getDailyAgencyCount(county)
        .then(vForVictory)
        .then((res) => res.reverse())
        .then(setData)
        .finally(() => setLoading(false));
    }
  };
  
  useEffect(fetchDailyAgencyCount, [county]);

  return [data, loading];
};

export default useDailyAgencyCount;
