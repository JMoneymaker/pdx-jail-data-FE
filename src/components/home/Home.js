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
      <section className={styles.dynamo}>
        <section id={styles.clack} className={styles.dynamicWrapper}>
          <div className={styles.countyTitle}>
            <h3>Clackamas</h3>
          </div>
          <div className={styles.dynamicDisplay}>
            <DynamicDataDisplay hook={useClackToday}>Currently in detention</DynamicDataDisplay>
          </div>
          <div className={styles.dynamicDisplay}>
            <DynamicDataDisplay hook={useClackChange}>Net one day change</DynamicDataDisplay>
          </div>
        </section>
        <section id={styles.mult} className={styles.dynamicWrapper}>
          <div className={styles.countyTitle}>
            <h3>Multnomah</h3>
          </div>
          <div className={styles.dynamicDisplay}>
            <DynamicDataDisplay hook={useMultToday}>Currently in detention</DynamicDataDisplay>
          </div>
          <div className={styles.dynamicDisplay}>
            <DynamicDataDisplay hook={useMultChange}>Net one day change</DynamicDataDisplay>
          </div>
        </section>

        <section id={styles.wash} className={styles.dynamicWrapper}>
          <div className={styles.countyTitle}>
            <h3>Washington</h3>
          </div>
          <div className={styles.dynamicDisplay}>
            <DynamicDataDisplay hook={useWashToday}>Currently in detention</DynamicDataDisplay>
          </div>
          <div className={styles.dynamicDisplay}>
            <DynamicDataDisplay hook={useWashChange}>Net one day change</DynamicDataDisplay>
          </div>
        </section>
      </section>
      <section className={styles.chartsWrapper}>
        <DailyDetentionCounts />
      </section>
    </main>
  );
};

export default Home;
