import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import PieRadioControls from './PieRadioControls';
import styles from './VerticalBar.css';
import DailyCountFacility from '../charts/DailyCountFacility';

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
          <PieRadioControls handleChange={handleChange} name={'facility-radio'}/>
        </header>
        <DailyCountFacility county={county} />
      </section>
    </>
  );
};

export default Pie;

