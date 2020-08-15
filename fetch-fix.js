const useDailyCountGender = county => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDailyGenderCount = () => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    getDailyGenderCount(county, signal)
      .then(shapeGender)
      .then(setData)
      .finally(() => setLoading(false));
    return () => controller.abort();
  };
  useEffect(fetchDailyGenderCount, [county]);
  return [data, loading];
};
export const getDailyAverageDetentionByRace = (county, signal = null) => {
  return fetch(`https://pdx-jail-data.herokuapp.com/api/v1/${county}/dailyDetentionAverageByRace`, { signal })
    .then(res => res.json());
};
