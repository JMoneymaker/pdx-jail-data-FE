import React from 'react';
import Landing from './landing/Landing';
import TrendTriCountyTotals from './chart-scroll/TrendTriCountyTotals';
import DailyCountAge from './chart-scroll/DailyCountAge';
import DailyCountAgency from './chart-scroll/DailyCountAgency';
import DailyCountFacility from './chart-scroll/DailyCountFacility';
import DailyCountGender from './chart-scroll/DailyCountGender';
import DailyCountRace from './chart-scroll/DailyCountRace';
import DailyCountChargeSev from './chart-scroll/DailyCountChargeSev';
import DailyCountChargeDesc from './chart-scroll/DailyCountChargeDesc';
import Footer from './common/Footer';
import './App.css';

import useUpDate from '../hooks/useUpDated';

export default function App() {
  
  const { upDated } = useUpDate();
  const updated = upDated.slice(0, -13);

  return (
    <>
      <Landing />
      <TrendTriCountyTotals updated={updated}/>
      <DailyCountAge updated={updated}/>
      {/* <DailyCountAgency updated={updated}/> */}
      {/* <DailyCountFacility updated={updated}/> */}
      {/* <DailyCountGender updated={updated}/> */}
      <DailyCountRace updated={updated}/>
      {/* <DailyCountChargeSev updated={updated}/> */}
      {/* <DailyCountChargeDesc updated={updated}/> */}
      <Footer />
    </>
  );
}
