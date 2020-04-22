import React from 'react';
import styles from './Home.css';
import DynamicDataDisplay from '../common/DynamicDataDisplay';
import useDailyChange from '../../hooks/useDailyChange';
import useDailyTotal from '../../hooks/useDailyTotal';
import DailyDetentionCounts from '../charts/DailyCount';

const Home = () => {

  return (
    <main className={styles.Home}>
      <section id={styles.mult} className={styles.dynamicWrapper}>
        <div className={styles.countyTitle}>
          <h3>Multnomah</h3>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyTotal}>Currently in detention</DynamicDataDisplay>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyChange}>Net one day change</DynamicDataDisplay>
        </div>
      </section>
      <section id={styles.clack} className={styles.dynamicWrapper}>
        <div className={styles.countyTitle}>
          <h3>Clackamas</h3>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyTotal}>Currently in detention</DynamicDataDisplay>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyChange}>Net one day change</DynamicDataDisplay>
        </div>
      </section>
      <section id={styles.wash} className={styles.dynamicWrapper}>
        <div className={styles.countyTitle}>
          <h3>Washington</h3>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyTotal}>Currently in detention</DynamicDataDisplay>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyChange}>Net one day change</DynamicDataDisplay>
        </div>
      </section>
      <section className={styles.chartsWrapper}>
        <DailyDetentionCounts />
      </section>
    </main>
  );
};

export default Home;
