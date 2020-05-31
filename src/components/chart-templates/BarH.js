import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';

const HBar = ({ data, county, xLabel }) => {
    
  return (
    <VictoryChart
      domainPadding={[10 + (100 / data.length), 10 + (100 / data.length)]}
      // width={400}
      height={210}
      padding={{ top: 15, bottom: 30, left: 75, right: 40 }}
    >
      <VictoryLabel 
        text={county.toUpperCase() + ' COUNTY'}
        x={175} 
        y={4}
        style={{
          fontSize: 12
        }}
      />
      <VictoryBar
        barRatio={0.8}
        style={{
          data: {
            fill: 'black'
          },
          labels: {
            fontSize: 7
          }
        }}
        data={data}
        horizontal={true}
        padding={{ bottom: 20 }}
        labels={({ datum }) => datum.y}
      />
      <VictoryAxis
        style={{
          axisLabel: { padding: 15, fontSize: 10 },
          tickLabels: {
            fontSize: 7,
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
          axisLabel: { padding: 15, fontSize: 10 },
          tickLabels: {
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif',
            fillOpacity: 1,
            margin: 0,
            padding: 0
          }
        }}
      />
    </VictoryChart>
  );
};

HBar.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  xLabel: PropTypes.string.isRequired,
  legend: PropTypes.bool
};

export default HBar;
