import React from 'react';
// import Landing from './landing/Landing';
import ChartContainer from './chart-scroll/ChartContainer';
import Footer from './common/Footer';
import useAgeCount from '../hooks/useAgeCount';
import useAgencyCount from '../hooks/useAgencyCount';
import useFacilityCount from '../hooks/useFacilityCount';
import useGenderCount from '../hooks/useGenderCount';
import useRaceCount from '../hooks/useRaceCount';
import useChargeSeverity from '../hooks/useChargeSeverity';
import useChargeDescription from '../hooks/useChargeDescription';
import useTriCountyTrend from '../hooks/useTriCountyTrend';
import './App.css';

export default function App() {
  
  // const { upDated } = useUpDate();
  // const updated = upDated.slice(0, -13);

  return (
    <>
      {/* <Landing /> */}
      <ChartContainer 
        category={'Trend Data'}
        title={'Daily Population Total'}
        template={'Area'}
        yLabel={'Date'}
        hook={useTriCountyTrend}
      />
      <ChartContainer 
        category={'Age'}
        title={'Daily Population by Age'}
        template={'VBar'}
        yLabel={'Age Range'}
        hook={useAgeCount}
      />
      <ChartContainer
        category={'Agency'}
        title={'Daily Population by Arresting Agency'}
        template={'HBar'}
        hook={useAgencyCount}/>
      <ChartContainer 
        category={'Facility'}
        title={'Daily Population by Facility'}
        template={'Pie'}
        hook={useFacilityCount}/>
      <ChartContainer 
        category={'Gender'}
        title={'Daily Population by Gender'}
        template={'HBar'}
        hook={useGenderCount}/>
      <ChartContainer 
        category={'Race'}
        title={'Daily Population by Race'}
        template={'VBar'}
        hook={useRaceCount}/>
      <ChartContainer 
        category={'ChargeSeverity'}
        title={'Daily Population by Top Charge Severity'}
        template={'HBar'}
        hook={useChargeSeverity}/>
      <ChartContainer 
        category={'Top 20 Charges'}
        title={'Daily Population by Top Charge'}
        template={'HBar'}
        hook={useChargeDescription}/>
      <Footer />
    </>
  );
}
