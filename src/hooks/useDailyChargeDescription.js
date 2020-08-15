import { useState, useEffect } from 'react';
import { getDailyTopCharges } from '../services/getDailyCounts';
import { vForVictory } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyChargeDescriptions = () => {
    setLoading(true);
    getDailyTopCharges(county)
      .then(vForVictory)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyChargeDescriptions, [county]);

  return [data, loading];
};

export default useDailyChargeDescription;

