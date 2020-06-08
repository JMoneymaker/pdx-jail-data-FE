import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartLoading from '../common/ChartLoading';
import Header from '../common/Header';
import BarV from '../chart-templates/BarV';
import styles from './ChartScroll.css';
import useDailyAge from '../../hooks/useDailyAgeRange';

const DailyCountAge = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const [data, loading] = useDailyAge(county);

  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      age: item.x,
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
          name={'age-radio'} 
          id={'age'}
          title={'Daily Snapshot'}   
          category={'Population by Age Range'}
          data={csvData}
          filename={`jdpdx-daily-age-count-${updated}-${county}.csv`}
          updated={updated}
          county={county} >
        </Header>
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

