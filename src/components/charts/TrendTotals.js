import { VictoryLine, VictoryStack, VictoryChart, VictoryAxis } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyCounts } from '../../services/getTriCountyDaily';
import styles from './Charts.css';

const TrendTotals = () => {
  const [rawTrendData, setRawTrendData] = useState([]);
  
  useEffect(() => {
    getDailyCounts()
      .then(res => {setRawTrendData(res[0].counts);});
  }, []);

  console.log(rawTrendData, 'rawdata');

  const shapeTrend = rawData => {
    let clackamas = [];
    let washington = [];
    let multnomah = [];

    rawData.map(i => {
      clackamas.push({
        x: i.date.slice(0, 10),
        y: i.clack });
      multnomah.push({
        x: i.date.slice(0, 10),
        y: i.mult });
      washington.push({
        x: i.date.slice(0, 10),
        y: i.wash });
    });
    return [clackamas, multnomah, washington];
  };
  
  const data = shapeTrend(rawTrendData);

  console.log(data, 'data');

  console.log(data[0], 'data0');
  console.log(data[1], 'data1');
  console.log(data[2], 'data2');

  return (
    <div className={styles.ChartWrapper}>
      <VictoryChart
        domainPadding={5}
        width={400}
        height={200}
      >
        <VictoryStack>
          <VictoryLine 
            data={[...data[0]]} 
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' },
              labels: {
                fontSize: 5,
                fontFamily: 'Roboto Condensed, sans-serif',
              }
            }}
            labels={({ datum }) => datum.y}
          />
          <VictoryLine 
            data={[...data[2]]}
            style={{
              data: { stroke: '#000000' },
              parent: { border: '1px solid #ccc' },
              labels: {
                fontSize: 5,
                fontFamily: 'Roboto Condensed, sans-serif',
              }
            }}
            labels={({ datum }) => datum.y}
          />
          <VictoryLine 
            data={[...data[1]]}
            style={{
              data: { stroke: '#696969' },
              parent: { border: '1px solid #ccc' },
              labels: {
                fontSize: 5,
                fontFamily: 'Roboto Condensed, sans-serif',
              }
            }}
            labels={({ datum }) => datum.y}
          />
        </VictoryStack>
        <VictoryAxis
          label='date'
          style={{
            axisLabel: { padding: 20, fontSize: 8 },
            tickLabels: {
              fontSize: 4.5,
              fontFamily: 'Roboto Condensed, sans-serif',
              fillOpacity: 1,
              margin: 2,
              padding: 8,
              angle: 40
            }
          }} 
        />
        <VictoryAxis dependentAxis
          label='people in custody'
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


export default TrendTotals;
