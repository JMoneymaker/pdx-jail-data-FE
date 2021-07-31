import React from 'react';
import ChartContainer from './ChartContainer';
import useTriCountyTotals from '../../hooks/staticHooks/staticUseTriCountyTotals';
import useAgencyCount from '../../hooks/staticHooks/staticUseAgencyCount';
import useChargeDescription from '../../hooks/staticHooks/staticUseChargeDescription';
import useChargeSeverity from '../../hooks/staticHooks/staticUseChargeSeverity';
import useFacilityCount from '../../hooks/staticHooks/staticUseFacilityCount';
import useAgeCount from '../../hooks/staticHooks/staticUseAgeCount';
import useGenderCount from '../../hooks/staticHooks/staticUseGenderCount';
import useRaceCount from '../../hooks/staticHooks/staticUseRaceCount';

export default function ChartScroll() {

  return (

    <>
      <ChartContainer
        chartType={'Trend Data'} 
        category={'totals'}
        title={'Daily Population Total'}
        template={'Area'}
        yLabel={'Date'}
        hook={useTriCountyTotals}
        displayRadios={false}
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
        category={'Top 20 Charges'}
        title={'Most Common Charges'}
        template={'HBar'}
        hook={useChargeDescription}
        displayRadios={false}
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
        category={'Facility'}
        title={'Population by Facility'}
        template={'Pie'}
        hook={useFacilityCount}
        displayRadios={true}
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
        yLabel={'Race'}
        hook={useRaceCount}
        displayRadios={true}
      />
    </>
      
  );

}
