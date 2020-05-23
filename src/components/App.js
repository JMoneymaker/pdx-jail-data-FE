import React from 'react';
import Landing from './landing/Landing';
import DailyCountRaceVBar from './dailyBar/DailyCountRaceVBar';
import DailyCountAgencyHBar from './dailyBar/DailyCountAgencyHBar';
import DailyAverageDetentionVBar from './dailyBar/DailyAverageDetentionVBar';
import DailyCountAgeVBar from './dailyBar/DailyCountAgeVBar';
import DailyCountFacilityPie from './dailyBar/DailyCountFacilityPie';
import TrendTriCountyTotalsStack from './dailyBar/TrendTriCountyTotalsStack';
import './App.css';
import DailyCountChargeSevHBar from './dailyBar/DailyCountChargeSevHBar';
import DailyCountChargeDescHBar from './dailyBar/DailyCountChargeDescHBar';

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
  
