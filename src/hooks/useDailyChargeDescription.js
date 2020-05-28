import { useState, useEffect } from 'react';
import { getDailyTopCharges } from '../services/getDailyCounts';
import { shapeChargeDescription } from '../utils/dailyCounts';

const useDailyChargeDescription = county => {
  const [chargeDescriptions, setChargeDescriptions] = useState([]);

  const fetchDailyChargeDescriptions = () => {
    getDailyTopCharges(county)
      .then(shapeChargeDescription)
      .then(setChargeDescriptions);
  };

  useEffect(fetchDailyChargeDescriptions, [county]);

  return chargeDescriptions;
};

export default useDailyChargeDescription;

