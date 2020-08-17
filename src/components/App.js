import React from 'react';
import Landing from './landing/Landing';
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
      <Landing />
      <ChartContainer
        chartType={'Trend Data'} 
        categity={'totals'}
        title={'Daily Population Total'}
        template={'Area'}
        yLabel={'Date'}
        hook={useTriCountyTrend}
        displayRadios={false}
      />
      <ChartContainer 
        chartType={'Daily Snapshot'} 
        category={'Age'}
        title={'Population by Age Range'}
        template={'VBar'}
        yLabel={'Age Range'}
        hook={useAgeCount}
        displayRadios={true}
      />
      <ChartContainer
        chartType={'Daily Snapshot'} 
        category={'Agency'}
        title={'Population by Arresting Agency'}
        template={'HBar'}
        hook={useAgencyCount}
        displayRadios={true}
      />
      <ChartContainer
        chartType={'Daily Snapshot'}  
        category={'Facility'}
        title={'Population by Facility'}
        template={'Pie'}
        hook={useFacilityCount}
        displayRadios={true}
      />
      <ChartContainer
        chartType={'Daily Snapshot'}  
        category={'Gender'}
        title={'Population by Gender'}
        template={'HBar'}
        hook={useGenderCount}
        displayRadios={true}
      />
      <ChartContainer
        chartType={'Daily Snapshot'}  
        category={'Race'}
        title={'Population by Race'}
        template={'VBar'}
        hook={useRaceCount}
        displayRadios={true}
      />
      <ChartContainer
        chartType={'Daily Snapshot'}  
        category={'ChargeSeverity'}
        title={'Population by Top Charge Severity'}
        template={'HBar'}
        hook={useChargeSeverity}
        displayRadios={false}
      />
      <ChartContainer 
        chartType={'Daily Snapshot'} 
        category={'Top 20 Charges'}
        title={'Most Common Charges'}
        template={'HBar'}
        hook={useChargeDescription}
        displayRadios={false}
      />
      <Footer />
    </>
  );
}
