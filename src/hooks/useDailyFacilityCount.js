import { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../services/getDailyCounts';
import { groupByCounty } from '../utils/dailyCounts';


const useDailyCountFacility = () => {
  const [clack, setClack] = useState([]);
  const [mult, setMult] = useState([]);
  const [wash, setWash] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyFacilityCount = () => {
    setLoading(true);
    getDailyFacilityCount()
      .then(res => groupByCounty(res, 'county'))
      .then(res => {
        setClack(res.Clackamas), 
        setMult(res.Multnomah), 
        setWash(res.Washington);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyFacilityCount, []);

  return [clack, mult, wash, loading];
};

export default useDailyCountFacility;
