import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { getDailyRaceCount } from '../../services/getMultnomahDaily';
import React, { useState, useEffect } from 'react';
import styles from './Charts.css';
import Header from './Header';
import useUpDate from '../../hooks/useUpDated';

const DailyRaceMultV = () => {

  const [rawData, setRawData] = useState([]);
  
  useEffect(() => {
    getDailyRaceCount()
      .then(res => {setRawData(res);});
  }, []);

  const alphabetical = rawData.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  });
  const complete = alphabetical.map(item => {
    if(item._id === 'P'){
      item._id = 'Pacific Islander';
    } return item;
  });
  let data = complete.map(item => {
    return ({
      x: item._id,
      y: item.total
    });
  });

  
  return (
    <div className={styles.chartPageContainer}>
      <Header upDateHook={useUpDate}/>
      <div className={styles.chartWrapper}>
        <VictoryChart
          domainPadding={25}
          width={400}
          height={200}
        >
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

export default DailyRaceMultV;
