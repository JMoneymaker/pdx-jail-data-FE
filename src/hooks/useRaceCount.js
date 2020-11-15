import { useState, useEffect, useContext } from 'react';
import AbortController from 'abort-controller';
import { getCountByCategory } from '../services/jailDataApi';
import { vForVictory } from '../data-shapers/vForVictory';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';
import { alphabetize } from '../data-shapers/alphabetize';

const useRaceCount = county => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRaceCount = () => {
    setLoading(true);
    getCountByCategory(county, 'Race', signal)
      .then(res => {
        setData(vForVictory(alphabetize(res)));
        setCSV(makeCSV(res, county, updated, 'race'));
      })
      .finally(() => setLoading(false));
    
    return () => abortController.abort();

  };

  useEffect(fetchRaceCount, [county]);

  return [data, csv, loading];
};

export default useRaceCount;
