import { useState, useEffect } from 'react';
import { getDailyChargeSeverityCount } from '../services/getDailyCounts';
import { shapeChargeSeverity } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [chargeSeverityCount, setChargeSeverityCount] = useState([]);

  const fetchDailyChargeSeverityCount = () => {
    getDailyChargeSeverityCount(county)
      .then(shapeChargeSeverity)
      .then(setChargeSeverityCount);
  };

  useEffect(fetchDailyChargeSeverityCount, [county]);

  return chargeSeverityCount;
};

export default useDailyChargeDescription;

