import React from 'react';
import Header from './common/Header';
import DailyDetentionCounts from './charts/DailyCount';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <DailyDetentionCounts />
    </>
  );
}
  
