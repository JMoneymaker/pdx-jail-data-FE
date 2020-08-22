import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import ChartLoading from '../Loading/ChartLoading';
import ChartDisplay from './ChartDisplay';
import styles from './ChartScroll.css';

const ChartContainer = ({ hook, chartType, category, title, displayRadios, template, yLabel }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, csv, loading] = hook(county);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.ChartScroll}>
        <Header
          chartType={chartType}
          category={category}
          title={title}
          displayRadios={displayRadios}
          name={`${category}-radio`}
          id={category}
          csv={csv}
          handleChange={handleChange}>
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <ChartDisplay
              template={template}
              yLabel={yLabel}
              county={county}
              data={data}
              loading={loading}
            />
          }
        </section>
      </section>
    </>
  );
};

ChartContainer.propTypes = {
  hook: PropTypes.func.isRequired,
  chartType: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  displayRadios: PropTypes.bool,
  template: PropTypes.string.isRequired,
  yLabel: PropTypes.string,
};

export default ChartContainer;
