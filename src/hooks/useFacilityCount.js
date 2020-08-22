import { useState, useEffect, useContext } from 'react';
import { getCountByCategory } from '../services/jailDataApi';
import deacronymizefacilities from '../data-shapers/deacronymizefacilities';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';
import { vForVictory } from '../data-shapers/vForVictory';

const useFacilityCount = (county) => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDailyFacility = () => {
    setLoading(true);
    getCountByCategory(county, 'Facility')
      .then(res => {
        setData(vForVictory(deacronymizefacilities(res)));
        setCSV(makeCSV(res, county, updated, 'facility'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyFacility, [county]);

  return [data, csv, loading];
};

export default useFacilityCount;
