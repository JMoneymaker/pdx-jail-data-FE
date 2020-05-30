import { useState, useEffect } from 'react';
import { getDailyTopCharges } from '../services/getDailyCounts';
import { shapeChargeDescription } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyChargeDescriptions = () => {
    setLoading(true);
    getDailyTopCharges(county)
      .then(shapeChargeDescription)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyChargeDescriptions, [county]);

  return [data, loading];
};

export default useDailyChargeDescription;

