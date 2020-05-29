import { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../services/getDailyCounts';
import { shapeFacility } from '../utils/dailyCounts';

const useDailyCountFacility = county => {
  const [facilityData, setFacilityData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyFacilityCount = () => {
    setLoading(true);
    getDailyFacilityCount(county)
      .then(shapeFacility)
      .then(setFacilityData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyFacilityCount, [county]);

  return [facilityData, loading];
};

export default useDailyCountFacility;
