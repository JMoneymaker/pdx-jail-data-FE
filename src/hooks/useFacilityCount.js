import { useState, useEffect, useContext } from 'react';
import AbortController from 'abort-controller';
import { getCountByCategory } from '../services/jailDataApi';
import deacronymizefacilities from '../data-shapers/deacronymizefacilities';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './useUpdatedContext';
import { vForVictory } from '../data-shapers/vForVictory';

const useFacilityCount = (county) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDailyFacility = () => {
    setLoading(true);
    getCountByCategory(county, 'Facility', signal)
      .then(res => {
        setData(vForVictory(deacronymizefacilities(res)));
        setCSV(makeCSV(res, county, updated, 'facility'));
      })
      .then(() => setLoading(false))
      .finally(() => abortController.abort());
  };

  useEffect(fetchDailyFacility, [county]);

  return [data, csv, loading];
};

export default useFacilityCount;
