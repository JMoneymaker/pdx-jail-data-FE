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

const Landing = () => {

  return (
  
    <div className={styles.bodySection}>
      <div className={styles.Landing}>
        <Header />
        <main className={styles.mainStats}>

          <section className={styles.mainStatsInner}>
            <div className={styles.centerReset}>
              <MainStat 
                county={'Clackamas'} 
                totalHook={useClackTotal} 
                changeHook={useClackChange}>
              </MainStat>

              <MainStat 
                county={'Multnomah'} 
                totalHook={useMultTotal} 
                changeHook={useMultChange}>
              </MainStat>

              <MainStat 
                county={'Washington'} 
                totalHook={useWashTotal} 
                changeHook={useWashChange}>
              </MainStat>
            </div>
          </section>

        </main>
      </div>
    </div>

  );
};

export default Landing;
