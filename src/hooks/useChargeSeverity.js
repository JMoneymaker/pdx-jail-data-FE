import { useState, useEffect } from 'react';
import { getChargeCount } from '../services/jailDataApi';
import { shapeChargeSeverity } from '../data-shapers/shapeChargeSeverity';
import { makeCSV } from '../utils/makeCSV';

const useChargeSeverity = county => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const fetchChargeSeverityCount = () => {
    setLoading(true);
    getChargeCount(county, 'ChargeCategory')
      .then(res => {
        setData(shapeChargeSeverity(res));
        setCSV(makeCSV(res, county, updated, 'charge-category'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchChargeSeverityCount, [county]);

  return [data, csv, loading];
};

export default useChargeSeverity;

