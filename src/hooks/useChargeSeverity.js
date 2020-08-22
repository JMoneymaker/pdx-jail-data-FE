import { useState, useEffect, useContext } from 'react';
import { getChargeCount } from '../services/jailDataApi';
import sortByChargeSeverity from '../data-shapers/sortByChargeSeverity';
import { vForVictory } from '../data-shapers/vForVictory';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';

const useChargeSeverity = county => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchChargeSeverity = () => {
    if(county === 'washington' || county === 'clackamas') return;
    setLoading(true);
    getChargeCount()
      .then(res => {
        setData(vForVictory(sortByChargeSeverity(res)));
        setCSV(makeCSV(res, county, updated, 'charge-category'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchChargeSeverity, []);

  return [data, csv, loading];
};

export default useChargeSeverity;

