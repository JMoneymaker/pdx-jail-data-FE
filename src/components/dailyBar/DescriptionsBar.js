import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import RadioControls from './RadioControls';
import styles from './VerticalBar.css';
import DailyDescriptions from '../charts/DailyDescriptions';

const DescriptionsBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Twenty Most Common Charges</Header>
          <RadioControls handleChange={handleChange} name={'description-radio'} id={'description'}/>
        </header>
        <section className={styles.chartArea}>
          <DailyDescriptions county={county} />
        </section>
      </section>
    </>
  );
};

export default DescriptionsBar;

