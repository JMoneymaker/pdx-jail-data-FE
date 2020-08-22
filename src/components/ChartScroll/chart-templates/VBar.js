import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

const VBar = ({ data, county, yLabel }) => {

  return (
    <VictoryChart
      domainPadding={[10 + (100 / data.length), 10 + (100 / data.length)]}
      // width={400}
      height={250}
      padding={{ top: 35, bottom: 50, left: 45, right: 30 }}
    >
      <VictoryLabel 
        text={county.toUpperCase() + ' COUNTY'}
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
         
        data={[...data]}
        padding={{ bottom: 20 }}
        labels={({ datum }) => datum.y}
      />
      <VictoryAxis
        label={yLabel}
        style={{
          axisLabel: { 
            padding: 18, 
            fontSize: 10,
            fontFamily: 'Quattrocento Sans, sans-serif'   
          },
          tickLabels: {
            fontSize: 6,
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
            padding: 25, 
            fontSize: 9,
            fontFamily: 'Quattrocento Sans, sans-serif'   
          },
          tickLabels: {
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif',
            fillOpacity: 1,
            margin: 0,
            padding: 2
          }
        }}
      />
    </VictoryChart>
  );
};

VBar.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  yLabel: PropTypes.string
};

export default VBar;
