import { useState, useEffect } from 'react';
import { getDailyTopCharges } from '../services/getDailyCounts';
import { shapeChargeDescription } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [chargeDescriptions, setChargeDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyChargeDescriptions = () => {
    setLoading(true);
    getDailyTopCharges(county)
      .then(shapeChargeDescription)
      .then(setChargeDescriptions)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyChargeDescriptions, [county]);

  return [chargeDescriptions, loading];
};

export default useDailyChargeDescription;

