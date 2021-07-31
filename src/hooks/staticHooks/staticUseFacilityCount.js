import { useState, useEffect, useContext } from 'react';
import washFacilityCount from '../../data/washCoFacilityCount.json';
import multFacilityCount from '../../data/multCoFacilityCount.json';
import clackFacilityCount from '../../data/clackCoFacilityCount.json';
import deacronymizefacilities from '../../data-shapers/deacronymizefacilities';
import { makeCSV } from '../../data-shapers/makeCSV';
import { UpdatedContext } from '../useUpdatedContext';
import { vForVictory } from '../../data-shapers/vForVictory';

const useFacilityCount = (county) => {
  const { updated } = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDailyFacility = () => {
    setLoading(true);
    switch(county) {
      case 'clackamas': {
        setData(vForVictory(deacronymizefacilities(clackFacilityCount)));
        setCSV(makeCSV(clackFacilityCount, county, updated, 'facility'));
      }
        break;
      case 'multnomah': {
        setData(vForVictory(deacronymizefacilities(multFacilityCount)));
        setCSV(makeCSV(multFacilityCount, county, updated, 'facility'));
      }
        break;
      case 'washington': {
        setData(vForVictory(deacronymizefacilities(washFacilityCount)));
        setCSV(makeCSV(washFacilityCount, county, updated, 'facility'));
      }
    }

    setLoading(false);
  };

  useEffect(fetchDailyFacility, [county]);

  return [data, csv, loading];
};

export default useFacilityCount;
