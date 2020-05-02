import React from 'react';
import Landing from './landing/Landing';
import styles from './App.css';
import DailyRaceMult from './charts/DailyRaceMult';

export default function App() {
  return (
    <>
      <Landing />
      <div className={styles.chartWrapper}>
        <DailyRaceMult />
      </div>

    </>
  );
}
  
