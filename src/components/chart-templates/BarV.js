import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';

const VBar = ({ data, county, yLabel, xLabel }) => {

  return (
    <VictoryChart
      domainPadding={[10 + (100 / data.length), 10 + (100 / data.length)]}
      // width={400}
      height={220}
      padding={{ top: 30, bottom: 30, left: 45, right: 30 }}

    >
      <VictoryLabel 
        text={county.toUpperCase() + ' COUNTY'}
        x={188} 
        y={10}
        style={{
          fontSize: 7.5
        }}
      />
      <VictoryBar
        responsive={false}
        barRatio={0.8}
        style={{
          data: {
            fill: 'black'
          },
          labels: {
            fontSize: 5
          }
        }}
         
        data={[...data]}
        padding={{ bottom: 20 }}
        labels={({ datum }) => datum.y}
      />
      <VictoryAxis
        label={yLabel}
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
  );
};

VBar.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  yLabel: PropTypes.string.isRequired,
  xLabel: PropTypes.string.isRequired
};

export default VBar;
