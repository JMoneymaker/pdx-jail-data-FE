import React, { useState } from 'react';
// import styles from '../charts/Charts.css';
import RadioControls from './RadioControls';
import DailyCountRace from '../charts/DailyCountRace';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';

const RaceSplash = () => {
  const [county, setCounty] = useState('multnomah');
  console.log(county, '10');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  console.log(county, '16');

  return (
    <>
      <header>
        <Header upDateHook={useUpDated}/>
        <RadioControls handleChange={handleChange} />
      </header>
      <section>
        <DailyCountRace county={county} />
      </section>
    </>
  );
};

export default RaceSplash;

