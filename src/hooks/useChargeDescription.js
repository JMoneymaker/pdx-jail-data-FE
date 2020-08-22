import { useState, useEffect, useContext } from 'react';
import AbortController from 'abort-controller';
import { getTop20Charges } from '../services/jailDataApi';
import { vForVictory } from '../data-shapers/vForVictory';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';


const useChargeDescription = county => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchChargeDescriptions = () => {
    if(county === 'washington' || county === 'clackamas') return;
    setLoading(true);
    getTop20Charges('multnomah', signal)
      .then(res => {
        setData(vForVictory(res));
        setCSV(makeCSV(res, county, updated, 'top20Charges'));
      })
      .finally(() => setLoading(false));
    
    return () => abortController.abort();

  };

  useEffect(fetchChargeDescriptions, []);

  return [data, csv, loading];
};

export default useChargeDescription;

