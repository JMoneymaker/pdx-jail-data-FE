import React, { useState } from 'react';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import useDailyAge from '../../hooks/useDailyAgeRange';
import styles from './VerticalBar.css';

const DailyCountAgeVBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAge(county);

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

