import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import RadioControls from './RadioControls';
import DailyCountAge from '../charts/DailyCountAge';
import styles from './VerticalBar.css';

const DailyAge = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };
  console.log(county);
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody by Age</Header>
          <RadioControls handleChange={handleChange} name={'age-radio'} id={'age'}/>
        </header>
        <DailyCountAge county={county} />
      </section>
    </>
  );
};

export default DailyAge;

