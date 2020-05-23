import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import DailyAverageDetention from '../charts/DailyAverageDetention';
import styles from './VerticalBar.css';

const DailyAverageDetentionHBar = () => {
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
            name={'avg-detention-radio'} 
            id={'avg-detention'} 
            title={'Average Detention Duration'}
            category={'by Race'}> 
          </Header>
        </header>
        <section className={styles.chartWrapper}>
          <DailyAverageDetention county={county} />
        </section>
      </section>
    </>
  );
};

export default DailyAverageDetentionHBar;

