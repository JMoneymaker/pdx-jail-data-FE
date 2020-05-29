import { useState, useEffect } from 'react';
import { getDailyChargeSeverityCount } from '../services/getDailyCounts';
import { shapeChargeSeverity } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [chargeSeverityCount, setChargeSeverityCount] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyChargeSeverityCount = () => {
    setLoading(true);
    getDailyChargeSeverityCount(county)
      .then(shapeChargeSeverity)
      .then(setChargeSeverityCount)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyChargeSeverityCount, [county]);

  return [chargeSeverityCount, loading];
};

export default useDailyChargeDescription;

