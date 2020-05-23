import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
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
          <Header 
            upDateHook={useUpDated}
            handleChange={handleChange}
            name={'agency-radio'} 
            id={'agency'}
            title={'Number of People in Custody'}   
            category={'by Arresting Agency'}>
          </Header>
        </header>
        <section className={styles.chartArea}>
          <DailyCountAgency county={county} />
        </section>
      </section>
    </>
  );
};

export default DailyCountAgencyHBar;

