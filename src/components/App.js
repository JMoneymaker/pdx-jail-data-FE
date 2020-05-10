import React from 'react';
import Landing from './landing/Landing';
import VerticalBar from './dailyBar/VerticalBar';
import HorizontalBar from './dailyBar/HorizontalBar';
import './App.css';

export default function App() {
  return (
    <>
      <Landing />
      <HorizontalBar />
      <VerticalBar />
    </>
  );
}
  
