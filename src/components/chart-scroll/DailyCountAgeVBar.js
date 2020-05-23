import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import DailyCountAge from '../charts/DailyCountAge';
import styles from './VerticalBar.css';

const DailyCountAgeVBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };
  
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            upDateHook={useUpDated} 
            handleChange={handleChange} 
            name={'age-radio'} 
            id={'age'}
            title={'Number of People in Custody'}   
            category={'by Age'}>
          </Header>
        </header>
        <DailyCountAge county={county} />
      </section>
    </>
  );
};

export default DailyCountAgeVBar;

