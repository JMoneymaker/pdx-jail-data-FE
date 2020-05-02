import React from 'react';
import styles from './Landing.css';
import MainStat from './MainStat';
import Header from './Header';
import useMultTotal from '../../hooks/useMultTotal';
import useMultChange from '../../hooks/useMultChange';
import useClackChange from '../../hooks/useClackChange';
import useClackTotal from '../../hooks/useClackTotal';
import useWashTotal from '../../hooks/useWashTotal';
import useWashChange from '../../hooks/useWashChange';
import useUpDate from '../../hooks/useUpDated';

const Landing = () => {

  return (
  
    <div className={styles.Landing}>
      <Header upDateHook={useUpDate}/>
      <main className={styles.mainStats}>
        <section className={styles.countiesInner}>
          <div className={styles.counties}>
            <h3 className={styles.county}>Clackamas</h3>
            <h3 className={styles.county}>Multnomah</h3>
            <h3 className={styles.county}>Washington</h3>
          </div>
        </section>
        <section className={styles.mainStatsInner}>
          <MainStat 
            totalHook={useClackTotal} 
            changeHook={useClackChange}>
          </MainStat>

          <MainStat 
            totalHook={useMultTotal} 
            changeHook={useMultChange}>
          </MainStat>

          <MainStat 
            totalHook={useWashTotal} 
            changeHook={useWashChange}>
          </MainStat>
        </section>
      </main>
    </div>

  );
};

export default Landing;
