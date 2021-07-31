import { useState, useEffect, useContext } from 'react';
import washAgencyCount from '../../data/washCoAgencyCount.json';
import multAgencyCount from '../../data/multCoAgencyCount.json';
import { vForVictory } from '../../data-shapers/vForVictory';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';
import { alphabetize } from '../../data-shapers/alphabetize';

const useAgencyCount = county => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAgencyCount = () => {
    
    switch(county) {
      case 'multnomah': {
        setData(vForVictory(alphabetize(multAgencyCount)));
        setCSV(makeCSV(multAgencyCount, county, updated, 'agency'));
      }
        break;
      case 'washington': {
        setData(vForVictory(washAgencyCount));
        setCSV(makeCSV(washAgencyCount, county, updated, 'agency'));
      }
    }

    setLoading(false);
  };
  
  useEffect(fetchAgencyCount, [county]);

  return [data, csv, loading];
};

export default useAgencyCount;
