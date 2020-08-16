import { useState, useEffect } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { shapeFacility } from '../data-shapers/shapeFacility';
import { makeCSV } from '../utils/makeCSV';

const useFacilityCount = (county) => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const fetchDailyFacility = () => {
    setLoading(true);
    getCategoryCount(county, 'Facility')
      .then(res => {
        setData(shapeFacility(res));
        setCSV(makeCSV(res, county, updated, 'facility'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyFacility, [county]);

  return [data, csv, loading];
};

export default useFacilityCount;
