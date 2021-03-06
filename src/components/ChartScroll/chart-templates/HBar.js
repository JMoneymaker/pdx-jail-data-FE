import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

const HBar = ({ data, county }) => {

  return (
    <VictoryChart
      domainPadding={[10 + (100 / data.length), 10 + (100 / data.length)]}
      height={210}
      padding={{ top: 15, bottom: 30, left: 75, right: 40 }}
    >
      <VictoryLabel 
        text={county.toUpperCase() + ' ' + ' COUNTY'}
        x={190} 
        y={4}
        style={{
          fontSize: 10,
          fontFamily: 'Roboto Condensed, sans-serif'
        }}
      />
      <VictoryBar
        barRatio={0.8}
        style={{
          data: {
            fill: 'black'
          },
          labels: {
            fontSize: 7,
            fontFamily: 'Quattrocento Sans, sans-serif'
          }
        }}
        data={data}
        horizontal={true}
        padding={{ bottom: 20 }}
        labels={({ datum }) => datum.y}
      />
      <VictoryAxis
        style={{
          axisLabel: { padding: 15, fontSize: 8 },
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
        label={'Number of People in Detention'}
        style={{
          axisLabel: { 
            padding: 18, 
            fontSize: 10,
            fontFamily: 'Quattrocento Sans, sans-serif'   
          },
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
  data: PropTypes.array.isRequired,
  county: PropTypes.string.isRequired
};

export default HBar;
