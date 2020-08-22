import { useState, useEffect, useContext } from 'react';
import AbortController from 'abort-controller';
import { getCountByCategory } from '../services/jailDataApi';
import { vForVictory } from '../data-shapers/vForVictory';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';
import { alphabetize } from '../data-shapers/alphabetize';

const useAgencyCount = county => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAgencyCount = () => {
    if(county === 'clackamas') return;
    setLoading(true);
    getCountByCategory(county, 'Agency', signal)
      .then(res => {
        setData(vForVictory(alphabetize(res)));
        setCSV(makeCSV(res, county, updated, 'agency'));
      })
      .then(() => setLoading(false))
      .finally(() => abortController.abort());
  };
  
  useEffect(fetchAgencyCount, [county]);

  return [data, csv, loading];
};

export default useAgencyCount;
