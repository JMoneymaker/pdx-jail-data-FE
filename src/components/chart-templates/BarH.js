import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';

const HBar = ({ data, xLabel }) => {

  const vForVictory = (array, category) => {
    return array.map(item => {
      return ({
        x: category,
        y: item.total
      });
    });
  };
    
  return (
    <VictoryChart
      domainPadding={[10 + (100 / data.length), 10 + (100 / data.length)]}
      // width={400}
      height={210}
      padding={{ top: 15, bottom: 30, left: 75, right: 40 }}
    >
      <VictoryLabel 
        text={data[0].county + ' ' + ' COUNTY'}
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
        data={vForVictory(data, 'item.gender')}
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
        label={xLabel}
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
  xLabel: PropTypes.string.isRequired,
  legend: PropTypes.bool
};

export default HBar;
