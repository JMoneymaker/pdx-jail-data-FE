import { useState, useEffect, useContext } from 'react';
import clackGenderCount from '../../data/clackCoGenderCount.json';
import multGenderCount from '../../data/multCoGenderCount.json';
import washGenderCount from '../../data/washCoGenderCount.json';
import { vForVictory } from '../../data-shapers/vForVictory';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';

const useDailyCountGender = (county) => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDailyGenderCount = () => {
    setLoading(true);
    switch(county) {
      case 'clackamas': {
        setData(vForVictory(clackGenderCount));
        setCSV(makeCSV(clackGenderCount, county, updated, 'gender'));
      }
        break;
      case 'multnomah': {
        setData(vForVictory(multGenderCount));
        setCSV(makeCSV(multGenderCount, county, updated, 'gender'));
      }
        break;
      case 'washington': {
        setData(vForVictory(washGenderCount));
        setCSV(makeCSV(washGenderCount, county, updated, 'gender'));
      }
    }
    setLoading(false);
  };

  useEffect(fetchDailyGenderCount, [county]);

  return [data, csv, loading];
};

export default useDailyCountGender;
