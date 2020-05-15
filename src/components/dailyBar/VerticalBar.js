import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import RadioControls from './RadioControls';
import DailyCountRace from '../charts/DailyCountRace';
import styles from './VerticalBar.css';

const VerticalBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };
  console.log(county);
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody by Race</Header>
          <RadioControls handleChange={handleChange} name={'race-radio'} id={'race'}/>
        </header>
        <DailyCountRace county={county} />
      </section>
    </>
  );
};

export default VerticalBar;

