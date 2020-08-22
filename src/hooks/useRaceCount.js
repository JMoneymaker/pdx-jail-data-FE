import { useState, useEffect, useContext } from 'react';
import { getCountByCategory } from '../services/jailDataApi';
import { vForVictory } from '../data-shapers/vForVictory';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';
import { alphabetize } from '../data-shapers/alphabetize';

const useRaceCount = county => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRaceCount = () => {
    setLoading(true);
    getCountByCategory(county, 'Race')
      .then(res => {
        setData(vForVictory(alphabetize(res)));
        setCSV(makeCSV(res, county, updated, 'race'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchRaceCount, [county]);

  return [data, csv, loading];
};

export default useRaceCount;
