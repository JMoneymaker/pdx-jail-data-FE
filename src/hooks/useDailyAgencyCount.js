import { useState, useEffect } from 'react';
import { getDailyAgencyCount } from '../services/getDailyCounts';
import { shapeAgency } from '../utils/dailyCounts';

const useDailyAgencyCount = county => {
  const [agencyData, setAgencyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAgencyCount = () => {
    if(county === 'clackamas'){
      console.log('error');
    } else {
      setLoading(true);
      getDailyAgencyCount(county)
        .then(shapeAgency)
        .then(setAgencyData)
        .finally(setLoading(false));
    }
  };
  
  useEffect(fetchDailyAgencyCount, [county]);

  return [agencyData, loading];
};

export default useDailyAgencyCount;
