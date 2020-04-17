import React from 'react';
import styles from './Home.css';
import DynamicDataDisplay from '../common/DynamicDataDisplay';
import useDailyChange from '../../hooks/useDailyChange';
import useDailyTotal from '../../hooks/useDailyTotal';
import DailyDetentionCounts from '../charts/DailyCount';

const Home = () => {

  return (
    <main className={styles.Home}>
      <section className={styles.dynamicWrapper}>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyTotal}>People currently in detention</DynamicDataDisplay>
        </div>
        <div className={styles.dynamicDisplay}>
          <DynamicDataDisplay hook={useDailyChange}>Net change since yesterday</DynamicDataDisplay>
        </div>
      </section>
      <section className={styles.chartsWrapper}>
        <DailyDetentionCounts />
      </section>
    </main>
  );
};

export default Home;
