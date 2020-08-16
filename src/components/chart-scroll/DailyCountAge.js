import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarV from '../chart-templates/BarV';
import styles from './ChartScroll.css';
import useDailyAge from '../../hooks/useDailyAgeRange';

const DailyCountAge = ({ county, data, loading, template }) => {  

  return (
    <>
      <section className={styles.ChartScroll}>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <BarV 
              data={data}
              county={county} 
              xLabel={'Number of People in Detention'} 
              yLabel={'Age Range'}
            />
          }
        </section>
      </section>
    </>
  );
};

DailyCountAge.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountAge;

