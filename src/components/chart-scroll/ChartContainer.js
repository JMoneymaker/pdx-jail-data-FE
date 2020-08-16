import React, { useState, useEffect } from 'react';
import ChartDisplay from './ChartDisplay';
import ChartLoading from '../common/ChartLoading';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import PropTypes from 'prop-types';
import { getDailyCount } from '../../services/getDailyCounts';

const ChartContainer = ({ category, title, template }) => {
  const [chartData, setChartData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const [county, setCounty] = useState('multnomah');
  const { upDated } = useUpDated();
  const updated = upDated.slice(0, -9);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  const makeCSV = data => {
    return ({
      fileName: `jdpdx-daily${category}-${county}-${updated}.csv`,
      data: data.map(object => {
        return ({
          date: updated,
          county: county,
          [category]: object._id,
          count: object.total
        });
      })
    });
  };

  useEffect(() => {
    setLoading(true);
    getDailyCount(county, category)
      .then(res => {
        setChartData(res);
        setCSV(makeCSV(res));
      })
      .finally(setLoading(false));
  }, [county]);

  return (
    loading ? <ChartLoading /> :
      <>
        <Header
          title={title}
          category={category}
          updated={updated}
          csv={csv}
          name={`${category}-radio`}
          id={category}
          handleChange={handleChange}
        ></Header>
        <ChartDisplay
          county={county}
          data={chartData}
          loading={loading}
          template={template}
        ></ChartDisplay>
      </>
  );
};

ChartContainer.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired
};

export default ChartContainer;
