import { useState, useEffect, useContext } from 'react';
import { getChargeCount } from '../services/jailDataApi';
import { shapeChargeSeverity } from '../data-shapers/shapeChargeSeverity';
import { makeCSV } from '../data-shapers/makeCSV';
import { UpdatedContext } from './updatedContext';

const useChargeSeverity = county => {
  const updated = useContext(UpdatedContext);
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchChargeSeverityCount = () => {
    if(county === 'washington' || county === 'clackamas') return;
    setLoading(true);
    getChargeCount('multnomah', 'ChargeCategory')
      .then(res => {
        setData(shapeChargeSeverity(res));
        setCSV(makeCSV(res, county, updated, 'charge-category'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchChargeSeverityCount, []);

  return [data, csv, loading];
};

export default useChargeSeverity;

