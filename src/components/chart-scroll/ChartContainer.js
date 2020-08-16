import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import ChartDisplay from './ChartDisplay';
import ChartLoading from '../common/ChartLoading';
import useUpDated from '../../hooks/useUpDated';
import styles from './ChartScroll.css';

const ChartContainer = ({ category, title, template, yLabel, hook }) => {
  const upDated = useUpDated();
  const [county, setCounty] = useState('multnomah');
  const [data, csv, loading] = hook(county);
  const updated = upDated.slice(0, -9);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.ChartScroll}>
        <Header
          title={title}
          category={category}
          updated={updated}
          name={`${category}-radio`}
          id={category}
          handleChange={handleChange}
          csv={csv}>
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
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  yLabel: PropTypes.string,
  hook: PropTypes.func.isRequired
};

export default ChartContainer;
