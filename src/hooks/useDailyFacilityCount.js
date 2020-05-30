import { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../services/getDailyCounts';
import { shapeFacility } from '../utils/dailyCounts';

const useDailyCountFacility = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyFacilityCount = () => {
    setLoading(true);
    getDailyFacilityCount(county)
      .then(shapeFacility)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyFacilityCount, [county]);

  return [data, loading];
};

export default useDailyCountFacility;
