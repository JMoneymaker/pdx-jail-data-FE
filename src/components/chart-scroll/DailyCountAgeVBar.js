import React, { useState } from 'react';
import CSV from '../common/CSV';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import useDailyAge from '../../hooks/useDailyAgeRange';
import styles from './VerticalBar.css';
import useCSVUpdated from '../../hooks/useCSVUpdated';

const DailyCountAgeVBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAge(county);
  const upDated = useCSVUpdated();
  const csvData = data.map(item => {
    return ({
      date: upDated,
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
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange} 
            name={'age-radio'} 
            id={'age'}
            title={'Daily Snapshot'}   
            category={'Population by Age'}>
          </Header>
          <CSV 
            data={[...csvData]}
            filename={`jdpdx-daily-age-count-${upDated}-${county}.csv`}
          ></CSV>
        </header>
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

export default DailyCountAgeVBar;

