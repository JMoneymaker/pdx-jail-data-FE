import React from 'react';
import DailyRaceMult from '../charts/dailyRaceMult';
import styles from './Bar.css';

const RaceBar = () => {
  return (
    <div className={styles.chartPageContainer}>
      <h3 className={styles.chartWrapper}>Number of People in Custordy by Race</h3>
      <div>
        <DailyRaceMult />
      </div>
    </div>
  );
};

RaceBar.propTypes = {};

export default RaceBar;
