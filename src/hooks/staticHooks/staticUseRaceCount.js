import { useState, useEffect, useContext } from 'react';
import clackRaceCount from '../../data/clackCoRaceCount.json';
import multRaceCount from '../../data/multCoRaceCount.json';
import washRaceCount from '../../data/washCoRaceCount.json';
import { vForVictory } from '../../data-shapers/vForVictory';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';
import { alphabetize } from '../../data-shapers/alphabetize';

const useRaceCount = county => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchRaceCount = () => {
    setLoading(true);
    switch(county) {
      case 'clackamas': {
        setData(vForVictory(alphabetize(clackRaceCount)));
        setCSV(makeCSV(clackRaceCount, county, updated, 'race'));
      }
        break;
      case 'multnomah': {
        setData(vForVictory(alphabetize(multRaceCount)));
        setCSV(makeCSV(multRaceCount, county, updated, 'race'));
      }
        break;
      case 'washington': {
        setData(vForVictory(alphabetize(washRaceCount)));
        setCSV(makeCSV(washRaceCount, county, updated, 'race'));
      }
    }
    setLoading(false);
  };

  useEffect(fetchRaceCount, [county]);

  return [data, csv, loading];
};

export default useRaceCount;
