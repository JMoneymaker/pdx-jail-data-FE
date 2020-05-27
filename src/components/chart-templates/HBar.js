import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryLegend } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const HBar = ({ data, county, xLabel, legend }) => {
    
  return (
    <div className={styles.ChartWrapper}>
      <VictoryChart
        domainPadding={5}
        width={400}
        height={220}
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
          label={xLabel}
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
        {legend ? <VictoryLegend 
          x={276} y={46}
          title="Maximum Penalty"
          titleOrientation='top'
          centerTitle
          orientation="vertical"
          // symbolSpacer={5}
          rowGutter={{ top: -1, bottom: -1 }}
          borderPadding={{ top: 0, bottom: 2, right: -20 }}
          style={{ 
            border: { stroke: 'black' },
            labels: { 
              fontSize: 4, 
              fontFamily: 'Roboto Condensed, sans-serif',
            },
            title: { fontSize: 5 },
            fill: 'black'
          }}
          colorScale={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
          data={[
            { name: 'A Misdemeanor - 364 days +/ $6,250' },
            { name: 'B Misdemeanor - 6 months +/ $2,500' },
            { name: 'C Misdemeanor - 30 days +/ $1,250' },
            { name: 'A Felony - 20 years +/ $375,000' },
            { name: 'B Felony - 10 years +/ $250,000 ' },
            { name: 'C Felony - 5 years +/ $125,000' },
            { name: 'U - Unclassified - Varies' }
          ]}
        /> : <></>}
      </VictoryChart>
    </div>
  );
};


HBar.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  xLabel: PropTypes.string.isRequired,
  legend: PropTypes.bool
};

export default HBar;
