import { useState, useEffect, useContext } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { vForVictory } from '../utils/dailyCounts';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';

const useRaceCount = county => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRaceCount = () => {
    setLoading(true);
    getCategoryCount(county, 'Race')
      .then(res => {
        setData(vForVictory(res));
        setCSV(makeCSV(res, county, updated, 'race'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchRaceCount, [county]);

  return [data, csv, loading];
};

export default useRaceCount;
