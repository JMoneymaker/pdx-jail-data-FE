import { useState, useEffect } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { shapeAge } from '../utils/dailyCounts';

const useAgeCount = county => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const makeCSV = data => {
    return ({
      fileName: `jdpdx-dailyAgeCount-${county}-${updated}.csv`,
      data: data.map(object => {
        return ({
          date: updated,
          county: county,
          age: object._id,
          count: object.total
        });
      })
    });
  };

  const fetchDailyAgencyCount = () => {
    setLoading(true);
    getCategoryCount(county, 'Age')
      .then(res => {
        setData(shapeAge(res));
        setCSV(makeCSV(res));
      })
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchDailyAgencyCount, [county]);

  return [data, csv, loading];
};

export default useAgeCount;
