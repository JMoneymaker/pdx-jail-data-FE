import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import styles from './VerticalBar.css';
import DailyCountFacility from '../charts/DailyCountFacility';
import RadioControls from './RadioControls';

const Pie = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody by Facility</Header>
          <RadioControls handleChange={handleChange} name={'facility-radio'} id={'facility'}/>
        </header>
        <DailyCountFacility county={county} />
      </section>
    </>
  );
};

export default Pie;

