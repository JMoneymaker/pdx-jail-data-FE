import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import { getDailyRaceCount } from '../../services/getWashingtonDaily';
import React, { useState, useEffect } from 'react';
import { shapeWash } from '../../utils/dailyCounts';
import styles from './Charts.css';

const DailyRaceWash = () => {

  const [rawData, setRawData] = useState([]);
  
  useEffect(() => {
    getDailyRaceCount()
      .then(res => {setRawData(res);});
  }, []);

  const data = shapeWash(rawData);
   
  return (
    <div className={styles.chartPageContainer}>
      <div className={styles.chartWrapper}>
        <VictoryChart
          domainPadding={25}
          width={400}
          height={200}
        >
          <VictoryLabel 
            text={'Washington County'}
            x={140} 
            y={30}
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
                fontFamily: 'inherit',
                fillOpacity: 1,
                margin: 0,
                padding: 2
              }
            }} 
          />
          <VictoryAxis dependentAxis
            label='number'
            style={{
              axisLabel: { padding: 20, fontSize: 8 },
              tickLabels: {
                fontSize: 5,
                fontFamily: 'inherit',
                fillOpacity: 1,
                margin: 0,
                padding: 0
              }
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default DailyRaceWash;
