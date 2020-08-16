import { useState, useEffect } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { vForVictory } from '../utils/dailyCounts';
import { makeCSV } from '../data-shapers/makeCSV';

const useAgencyCount = county => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const fetchAgencyCount = () => {
    if(county === 'clackamas'){
      console.log('error');
    } else {
      setLoading(true);
      getCategoryCount(county, 'Agency')
        .then(res => {
          setData(vForVictory(res));
          setCSV(makeCSV(res, county, updated, 'agency'));
        })
        .finally(() => setLoading(false));
    }
  };
  
  useEffect(fetchAgencyCount, [county]);

  return [data, csv, loading];
};

export default useAgencyCount;
