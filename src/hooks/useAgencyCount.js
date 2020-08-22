import { useState, useEffect, useContext } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { vForVictory } from '../utils/dailyCounts';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';

const useAgencyCount = county => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAgencyCount = () => {
    if(county === 'clackamas') return;
    setLoading(true);
    getCategoryCount(county, 'Agency')
      .then(res => {
        setData(vForVictory(res));
        setCSV(makeCSV(res, county, updated, 'agency'));
      })
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchAgencyCount, [county]);

  return [data, csv, loading];
};

export default useAgencyCount;
