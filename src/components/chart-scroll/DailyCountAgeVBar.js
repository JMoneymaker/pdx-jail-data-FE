import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import useDailyAge from '../../hooks/useDailyAgeRange';
import styles from './VerticalBar.css';

const DailyCountAgeVBar = ({ updated }) => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAge(county);

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
      <section className={styles.VerticalBar}>
        <Header 
          handleChange={handleChange} 
          name={'age-radio'} 
          id={'age'}
          title={'Daily Snapshot'}   
          category={'Population by Age'}
          data={csvData}
          filename={`jdpdx-daily-age-count-${updated}-${county}.csv`}
          updated={updated}
          county={county} >
        </Header>
        <VBar 
          data={data}
          county={county} 
          xLabel={'Number of People in Detention'} 
          yLabel={'Age Range'}
        />
      </section>
    </>
  );
};

DailyCountAgeVBar.propTypes = {
  updated: PropTypes.string.isRequired
};

export default DailyCountAgeVBar;

