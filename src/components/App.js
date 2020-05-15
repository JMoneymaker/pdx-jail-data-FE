import React from 'react';
import Landing from './landing/Landing';
import VerticalBar from './dailyBar/VerticalBar';
import HorizontalBar from './dailyBar/HorizontalBar';
import AverageVBar from './dailyBar/AverageVBar';
import Pie from './dailyBar/Pie';
import Line from './dailyBar/Line';
import './App.css';

export default function App() {
  return (
    <>
      <Landing />
      <HorizontalBar />
      <VerticalBar />
      <Pie />
      <Line />
      <AverageVBar />
    </>
  );
}
  
