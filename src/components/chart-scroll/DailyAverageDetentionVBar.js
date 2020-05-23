import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import RadioControls from '../common/RadioControls';
import DailyAverageDetention from '../charts/DailyAverageDetention';
import styles from './VerticalBar.css';

const DailyAverageDetentionHBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Average Detention Duration for People in Jail Today</Header>
          <RadioControls handleChange={handleChange} name={'avg-detention-radio'} id={'avg-detention'}/>
        </header>
        <DailyAverageDetention county={county} />
      </section>
    </>
  );
};

export default DailyAverageDetentionHBar;

