import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import DailyCountRace from '../charts/DailyCountRace';
import styles from './VerticalBar.css';

const DailyCountRaceVBar = () => {
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
            name={'race-radio'} 
            id={'race'}
            title={'Number of People in Custody'}
            category={'by Race'}> 
          </Header>
        </header>
        <DailyCountRace county={county} />
      </section>
    </>
  );
};

export default DailyCountRaceVBar;

