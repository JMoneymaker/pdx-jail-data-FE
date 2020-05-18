import React from 'react';
import Landing from './landing/Landing';
import VerticalBar from './dailyBar/VerticalBar';
import HorizontalBar from './dailyBar/HorizontalBar';
import AverageVBar from './dailyBar/AverageVBar';
import DailyAge from './dailyBar/DailyAge';
import Pie from './dailyBar/Pie';
import Line from './dailyBar/Line';
import './App.css';
import ChargesBar from './dailyBar/ChargesBar';
import DescriptionsBar from './dailyBar/DescriptionsBar';

export default function App() {
  return (
    <>
      <Landing />
      <HorizontalBar />
      <VerticalBar />
      <Pie />
      <Line />
      <AverageVBar />
      <DailyAge />
      <ChargesBar />
      <DescriptionsBar />
    </>
  );
}
  
