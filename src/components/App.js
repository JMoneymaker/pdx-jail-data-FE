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
// import useCSVUpdated from '../hooks/useCSVUpdated';
import useUpDate from '../hooks/useUpDated';

export default function App() {
  
  // const updated = useCSVUpdated();
  const { upDated } = useUpDate();
  const updated = upDated .slice(0, 8);

  return (
    <>
      <Landing />
      <TrendTriCountyTotalsStack updated={updated}/>
      <DailyCountAgeVBar updated={updated}/>
      <DailyCountAgencyHBar updated={updated}/>
      <DailyCountFacilityPie updated={updated}/>
      <DailyCountRaceVBar updated={updated}/>
      <DailyAverageDetentionVBar updated={updated}/>
      <DailyCountChargeSevHBar updated={updated}/>
      <DailyCountChargeDescHBar updated={updated}/>
    </>
  );
}
  
