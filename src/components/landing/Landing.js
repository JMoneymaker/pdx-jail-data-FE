import React, { useContext } from 'react';
import styles from './Landing.css';
import MainStat from './MainStat';
import Header from './Header';
import useMainStats from '../../hooks/useMainStats';
import { UpdatedContext } from '../../hooks/updatedContext';

const Landing = () => {
  const updated = useContext(UpdatedContext);
  const [today, yesterday, loading] = useMainStats();

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
            total={today.clack} 
            change={today.clack - yesterday.clack}
            loading={loading}>
          </MainStat>

          <MainStat 
            total={today.mult} 
            change={today.mult - yesterday.mult}
            loading={loading}>
          </MainStat>

          <MainStat 
            total={today.wash} 
            change={today.wash - yesterday.wash}
            loading={loading}>
          </MainStat>
        </section>
      </main>
    </div>

  );
};

export default Landing;
