import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import VBarRadioControls from './RadioControls';
import DailyAverageDetention from '../charts/DailyAverageDetention';
import styles from './VerticalBar.css';

const AverageVBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Average Detention Duration for People in Jail Today</Header>
          <VBarRadioControls handleChange={handleChange} name={'avg-detention-radio'}/>
        </header>
        <DailyAverageDetention county={county} />
      </section>
    </>
  );
};

export default AverageVBar;

