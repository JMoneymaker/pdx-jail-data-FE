import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const DailyCountChargeDesc = ({ county, data }) => {

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
          horizontal={true}
          padding={{ top: 20, bottom: 60 }}
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
DailyCountChargeDesc.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default DailyCountChargeDesc;