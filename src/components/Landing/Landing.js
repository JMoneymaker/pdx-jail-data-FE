import React, { useContext } from 'react';
import Header from './Header';
import MainStat from './MainStat';
import { UpdatedContext } from '../../hooks/useUpdatedContext';
// import useMainStats from '../../hooks/useMainStats';
import styles from './Landing.css';
import useTriCountyTrend from '../../hooks/useTriCountyTrend';

const Landing = () => {
  const updated = useContext(UpdatedContext);
  const [clackToday, clackChange, multToday, multChange, washToday, washChange, loading] = useTriCountyTrend();

  return (
  
    <div className={styles.Landing}>
      <Header updated={updated}/>
      <main className={styles.mainStats}>
        <section className={styles.countiesInner}>
          <div className={styles.counties}>
            <h2 className={styles.county}>Clackamas</h2>
            <h2 className={styles.county}>Multnomah</h2>
            <h2 className={styles.county}>Washington</h2>
          </div>
        </section>
        <section className={styles.mainStatsInner}>
          <MainStat 
            total={clackToday} 
            change={clackChange}
            loading={loading}>
          </MainStat>

          <MainStat 
            total={multToday} 
            change={multChange}
            loading={loading}>
          </MainStat>

          <MainStat 
            total={washToday} 
            change={washChange}
            loading={loading}>
          </MainStat>
        </section>
      </main>
    </div>

  );
  
};

export default Landing;
