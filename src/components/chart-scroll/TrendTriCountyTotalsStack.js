import React from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from '../common/Header';
import styles from './VerticalBar.css';
import TrendTriCountyTotals from '../charts/TrendTriCountyTotals';

const TrendTriCountyTotalsStack = () => {
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody Trend Data</Header>
        </header>
        <TrendTriCountyTotals />
      </section>
    </>
  );
};

export default TrendTriCountyTotalsStack;

