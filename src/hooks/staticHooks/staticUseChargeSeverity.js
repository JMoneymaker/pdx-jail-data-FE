import { useState, useEffect, useContext } from 'react';
import chargeCount from '../../data/multCoChargeCategory.json';
import sortByChargeSeverity from '../../data-shapers/sortByChargeSeverity';
import { vForVictory } from '../../data-shapers/vForVictory';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';

const useChargeSeverity = county => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchChargeSeverity = () => {
    setLoading(true);
    setData(vForVictory(sortByChargeSeverity(chargeCount)));
    setCSV(makeCSV(chargeCount, county, updated, 'charge-category'));
    setLoading(false);
  };

  useEffect(fetchChargeSeverity, []);

  return [data, csv, loading];
};

export default useChargeSeverity;

