import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import HorizontalRadioControls from './HorizontalRadioControls';
import styles from './VerticalBar.css';
import DailyCountAgency from '../charts/DailyCountAgency';

const HorizontalBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody by Arresting Agency</Header>
          <HorizontalRadioControls handleChange={handleChange} name={'agency-radio'}/>
        </header>
        <DailyCountAgency county={county} />
      </section>
    </>
  );
};

export default HorizontalBar;

