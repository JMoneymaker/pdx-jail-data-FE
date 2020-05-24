import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer, VictoryLabel } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyAgencyCount } from '../services/getDailyCounts';
import { shapeAgency } from '../utils/dailyCounts';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const DailyCountAgency = ({ county }) => {
  const [agencyData, setAgencyData] = useState([]);
  
  useEffect(() => {
    if(county === 'clackamas'){
      console.log('error');
    } else {
      getDailyAgencyCount(county)
        .then(res => {setAgencyData(res);});
    }
  }, [county]);

  if(county === 'clackamas') {
    return <div className={styles.countyError}>Data not available for {county} county</div>;
  } else {
    const data = shapeAgency(agencyData);


    return (
      <div className={styles.ChartWrapper}>
        <VictoryChart
          domainPadding={5}
          width={400}
          height={220}
          containerComponent={<VictoryContainer/>}
        >
          <VictoryLabel 
            text={county.toUpperCase() + ' COUNTY'}
            x={155} 
            y={30}
            style={{
              fontSize: 7.5,
            }}
          />
          <VictoryBar
            barRatio={0.8}
            style={{
              data: {
                fill: 'black',
              },
              labels: {
                fontSize: 5,
              }
            }}
         
            data={data}
            horizontal={true}
            padding={{ bottom: 60 }}
            labels={({ datum }) => datum.y}
          />
          <VictoryAxis
            style={{
              axisLabel: { padding: 15, fontSize: 8 },
              tickLabels: {
                fontSize: 4.5,
                fontFamily: 'Roboto Condensed, sans-serif',
                fillOpacity: 1,
                margin: 0,
                padding: 2
              }
            }} 
          />
          <VictoryAxis dependentAxis
            label='number'
            style={{
              axisLabel: { padding: 15, fontSize: 8 },
              tickLabels: {
                fontSize: 5,
                fontFamily: 'Roboto Condensed, sans-serif',
                fillOpacity: 1,
                margin: 0,
                padding: 0
              }
            }}
          />
        </VictoryChart>
      </div>
    );
  }
};

DailyCountAgency.propTypes = {
  county: PropTypes.string.isRequired,
};

export default DailyCountAgency;
