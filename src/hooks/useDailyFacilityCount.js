import { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../services/getDailyCounts';
import { shapeFacility } from '../data-shapers/shapeFacility';


const useDailyCountFacility = (county) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDailyAge = () => {
    setLoading(true);
    getDailyFacilityCount(county)
      .then(shapeFacility)
      .then(setData)
      .finally(() => setLoading(false));
  };

  useEffect(fetchDailyAge, [county]);

  return [data, loading];
};

export default useDailyCountFacility;

// To incorporate:
// const [clack, setClack] = useState([]);
//   const [mult, setMult] = useState([]);
//   const [wash, setWash] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDailyFacilityCount = () => {
//     setLoading(true);
//     getDailyFacilityCount()
//       .then(res => groupByCounty(res, 'county'))
//       .then(res => {
//         setClack(res.Clackamas), 
//         setMult(res.Multnomah), 
//         setWash(res.Washington);
//       })
//       .finally(() => setLoading(false));
//   };

//   useEffect(fetchDailyFacilityCount, []);

//   return [clack, mult, wash, loading];
