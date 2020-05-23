import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import RadioControls from '../common/RadioControls';
import styles from './VerticalBar.css';
import DailyCountAgency from '../charts/DailyCountAgency';

const DailyCountAgencyHBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody by Arresting Agency</Header>
          <RadioControls handleChange={handleChange} name={'agency-radio'} id={'agency'} />
        </header>
        <section className={styles.chartArea}>
          <DailyCountAgency county={county} />
        </section>
      </section>
    </>
  );
};

export default DailyCountAgencyHBar;

