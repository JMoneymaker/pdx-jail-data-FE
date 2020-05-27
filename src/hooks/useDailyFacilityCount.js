import { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../services/getDailyCounts';
import { shapeFacility } from '../utils/dailyCounts';

const useDailyCountFacility = county => {
  const [facilityData, setFacilityData] = useState([]);

  const fetchDailyFacilityCount = () => {
    getDailyFacilityCount(county)
      .then(shapeFacility)
      .then(setFacilityData);
  };

  useEffect(fetchDailyFacilityCount, [county]);

  return facilityData;
};

export default useDailyCountFacility;
