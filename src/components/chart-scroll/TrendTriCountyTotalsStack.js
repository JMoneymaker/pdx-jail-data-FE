import React from 'react';
import styles from './VerticalBar.css';
import TrendTriCountyTotals from '../charts/TrendTriCountyTotals';
import HeaderBasic from '../common/HeaderBasic';

const TrendTriCountyTotalsStack = () => {
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <HeaderBasic
            title={'Number of People in Custody'}
            category={'Trend Data'}> 
          </HeaderBasic>
        </header>
        <TrendTriCountyTotals />
      </section>
    </>
  );
};

export default TrendTriCountyTotalsStack;

