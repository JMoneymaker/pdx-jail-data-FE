import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import DailyCountChargeSev from '../charts/DailyCountChargeSev';

const DailyCountChargeSevHBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            upDateHook={useUpDated}
            handleChange={handleChange}
            name={'charge-radio'}
            id={'charge'}
            title={'Number of People in Custody'}
            category={'by Charge Severity'}> 
          </Header>
        </header>
        <section className={styles.chartArea}>

          <DailyCountChargeSev county={county} />
        </section>
      </section>
    </>
  );
};

export default DailyCountChargeSevHBar;

