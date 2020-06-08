import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarHDualAxes from '../chart-templates/BarHDualAxes';
import styles from './ChartScroll.css';
import useDailyGenderCount from '../../hooks/useDailyGenderCount';

const DailyCountGender = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyGenderCount(county);
  
  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      gender: item.x,
      count: item.y
    });
  });

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.ChartScroll}>
        <Header 
          handleChange={handleChange}
          name={'gender-radio'} 
          id={'gender'}
          title={'Daily Snapshot'}  
          updated={updated} 
          data={csvData}
          filename={`jdpdx-daily-gender-${updated}-${county}.csv`}
          category={'Population by Gender'}>
        </Header>
        <section className={styles.chartWrapper}>
          {loading ? <ChartLoading /> :
            <BarHDualAxes
              data={data} 
              county={county} 
              xLabel={'Number of People in Detention'} 
              yLabel={'Gender'}/>}
        </section>
      </section>
    </>
  );
};

DailyCountGender.propTypes = {
  updated: PropTypes.string.isRequired
};


export default DailyCountGender;

