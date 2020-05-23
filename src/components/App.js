import React from 'react';
import Landing from './landing/Landing';
import DailyCountRaceVBar from './chart-scroll/DailyCountRaceVBar';
import DailyCountAgencyHBar from './chart-scroll/DailyCountAgencyHBar';
import DailyAverageDetentionVBar from './chart-scroll/DailyAverageDetentionVBar';
import DailyCountAgeVBar from './chart-scroll/DailyCountAgeVBar';
import DailyCountFacilityPie from './chart-scroll/DailyCountFacilityPie';
import TrendTriCountyTotalsStack from './chart-scroll/TrendTriCountyTotalsStack';
import './App.css';
import DailyCountChargeSevHBar from './chart-scroll/DailyCountChargeSevHBar';
import DailyCountChargeDescHBar from './chart-scroll/DailyCountChargeDescHBar';

export default function App() {
  return (
    <>
      <Landing />
      <DailyCountAgencyHBar />
      <DailyCountRaceVBar />
      <DailyCountFacilityPie />
      <TrendTriCountyTotalsStack />
      <DailyAverageDetentionVBar />
      <DailyCountAgeVBar />
      <DailyCountChargeSevHBar />
      <DailyCountChargeDescHBar />
    </>
  );
}
  
