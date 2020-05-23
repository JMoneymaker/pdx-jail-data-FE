import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyAverageDetention } from '../../services/getDailyAverages';
import { shapeMultDetAvg, shapeClackDetAvg, shapeWashDetAvg } from '../../utils/dailyAverages';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const DailyAverageDetention = ({ county }) => {
  const [rawDetentionData, setRawDetentionData] = useState([]);
  
  useEffect(() => {
    getDailyAverageDetention(county)
      .then(res => {setRawDetentionData(res);});
  }, [county]);

  const data = (county === 'multnomah') ? shapeMultDetAvg(rawDetentionData)
    : (county === 'clackamas') ? shapeClackDetAvg(rawDetentionData) : shapeWashDetAvg(rawDetentionData);

  return (
    <div className={styles.ChartWrapper}>
      <VictoryChart
        domainPadding={25}
        width={400}
        height={225}
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
          padding={{ top: 20, bottom: 60 }}
          labels={({ datum }) => datum.y}
        />
        <VictoryAxis
          label='race'
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
          label='average number of days detained'
          style={{
            axisLabel: { padding: 20, fontSize: 8 },
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
};

DailyAverageDetention.propTypes = {
  county: PropTypes.string.isRequired,
};

export default DailyAverageDetention;
