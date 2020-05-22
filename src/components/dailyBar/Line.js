import React from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import styles from './VerticalBar.css';
import TrendTotals from '../charts/TrendTotals';

const Pie = () => {
  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody Trend Data</Header>
        </header>
        <TrendTotals />
      </section>
    </>
  );
};

export default Pie;

