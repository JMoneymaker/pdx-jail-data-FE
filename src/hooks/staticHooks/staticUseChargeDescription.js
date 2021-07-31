import { useState, useEffect, useContext } from 'react';
import { vForVictory } from '../../data-shapers/vForVictory';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';
import multCoTop20 from '../../data/multCoTop20.json';

const useChargeDescription = county => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});

  const fetchChargeDescriptions = () => {
    setData(vForVictory(multCoTop20));
    setCSV(makeCSV(multCoTop20, county, updated, 'top20Charges'));
  };

  useEffect(fetchChargeDescriptions, []);

  return [data, csv];
};

export default useChargeDescription;

