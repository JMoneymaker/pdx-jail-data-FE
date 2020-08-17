import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ChartDisplay from './ChartDisplay';
import ChartLoading from '../common/ChartLoading';
import styles from './ChartScroll.css';

const ChartContainer = ({ chartType, category, title, template, yLabel, hook, displayRadios }) => {
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
          title={title}
          category={category}
          name={`${category}-radio`}
          id={category}
          handleChange={handleChange}
          csv={csv}
          displayRadios={displayRadios}>
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <ChartDisplay
              county={county}
              data={data}
              loading={loading}
              template={template}
              yLabel={yLabel}
            />
          }
        </section>
      </section>
    </>
  );
};

ChartContainer.propTypes = {
  chartType: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  yLabel: PropTypes.string,
  hook: PropTypes.func.isRequired,
  displayRadios: PropTypes.bool
};

export default ChartContainer;
