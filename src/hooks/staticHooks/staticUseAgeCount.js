import { useState, useEffect, useContext } from 'react';
import clackAgeCount from '../../data/clackCoAgeCount.json';
import multAgeCount from '../../data/multCoAgeCount.json';
import makeAgeRanges from '../../data-shapers/makeAgeRanges';
import { vForVictory } from '../../data-shapers/vForVictory';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';

const useAgeCount = county => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDailyAgeCount = () => {
    setLoading(true);
    switch(county) {
      case 'clackamas': {
        setData(vForVictory(makeAgeRanges(clackAgeCount)));
        setCSV(makeCSV(clackAgeCount, county, updated, 'age range'));
      }
        break;
      case 'multnomah': {
        setData(vForVictory(makeAgeRanges(multAgeCount)));
        setCSV(makeCSV(multAgeCount, county, updated, 'age range'));
      }
    }
    setLoading(false);
  };
  
  useEffect(fetchDailyAgeCount, [county]);

  return [data, csv, loading];
};

export default useAgeCount;
