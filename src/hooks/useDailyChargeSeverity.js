import { useState, useEffect } from 'react';
import { getDailyChargeSeverityCount } from '../services/getDailyCounts';
import { shapeChargeSeverity } from '../data-shapers/shapeChargeSeverity';

const useDailyChargeDescription = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyChargeSeverityCount = () => {
    setLoading(true);
    getDailyChargeSeverityCount(county)
      .then(shapeChargeSeverity)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyChargeSeverityCount, [county]);

  return [data, loading];
};

export default useDailyChargeDescription;

