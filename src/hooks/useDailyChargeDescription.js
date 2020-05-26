import { useState, useEffect } from 'react';
import { getDailyChargeDescriptions } from '../services/getDailyCounts';
import { shapeChargeDescription } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [chargeDescriptions, setChargeDescriptions] = useState([]);

  const fetchDailyChargeDescriptions = () => {
    getDailyChargeDescriptions(county)
      .then(shapeChargeDescription)
      .then(setChargeDescriptions);
  };

  useEffect(fetchDailyChargeDescriptions, [county]);

  return chargeDescriptions;
};

export default useDailyChargeDescription;

