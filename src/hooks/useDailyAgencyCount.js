import { useState, useEffect } from 'react';
import { getDailyAgencyCount } from '../services/getDailyCounts';
import { shapeAgency } from '../utils/dailyCounts';

const useDailyAgencyCount = county => {
  const [agencyData, setAgencyData] = useState([]);

  const fetchDailyAgencyCount = () => {
    if(county === 'clackamas'){
      console.log('error');
    } else {
      getDailyAgencyCount(county)
        .then(shapeAgency)
        .then(setAgencyData);
    }
  };
  
  useEffect(fetchDailyAgencyCount, [county]);

  return agencyData;
};

export default useDailyAgencyCount;
