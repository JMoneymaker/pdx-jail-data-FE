import React from 'react';
import styles from './Home.css';
import DynamicDataDisplay from '../common/DynamicDataDisplay';
import useMultToday from '../../hooks/useMultToday';
import useMultChange from '../../hooks/useMultChange';
import useClackChange from '../../hooks/useClackChange';
import useClackToday from '../../hooks/useClackToday';
import useWashToday from '../../hooks/useWashToday';
import useWashChange from '../../hooks/useWashChange';
import DailyDetentionCounts from '../charts/DailyCount';

const Home = () => {

  return (
    <main className={styles.Home}>
      <section className={styles.dynamoContainer}>

        <section id={styles.clack} className={styles.dynamoWrapper}>
          <h3 className={styles.countyTitle}>Clackamas</h3>
          <DynamicDataDisplay hook={useClackToday}># People in custody</DynamicDataDisplay>
          <DynamicDataDisplay hook={useClackChange}>Net one day change</DynamicDataDisplay>
        </section>

        <section id={styles.mult} className={styles.dynamoWrapper}>
          <h3 className={styles.countyTitle}>Multnomah</h3>
          <DynamicDataDisplay hook={useMultToday}># People in custody</DynamicDataDisplay>
          <DynamicDataDisplay hook={useMultChange}>Net one day change</DynamicDataDisplay>
        </section>

        <section id={styles.wash} className={styles.dynamoWrapper}>
          <h3 className={styles.countyTitle}>Washington</h3>
          <DynamicDataDisplay hook={useWashToday}># People in custody</DynamicDataDisplay>
          <DynamicDataDisplay hook={useWashChange}>Net one day change</DynamicDataDisplay>
        </section>

      </section>

      <section className={styles.chartsContainer}>
        <DailyDetentionCounts />
      </section>

    </main>
  );
};

export default Home;
