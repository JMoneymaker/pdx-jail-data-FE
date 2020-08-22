import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryLabel, VictoryPie, VictoryAxis, VictoryLegend } from 'victory';

const Pie = ({ data, county }) => {
  const makeLabel = array => {
    return array.map(obj => {
      return ({
        name: obj.x
      });
    });
  };

  return data.length > 0 ?
    (
      <VictoryChart
        height={220}
        padding={{ top: 30, bottom: 30, left: 30, right: 120 }}
      >
        <VictoryLabel 
          text={county.toUpperCase() + ' ' + 'COUNTY'}
          x={175} 
          y={4}
          style={{
            fontSize: 10
          }}          
        />
        <VictoryPie
          data={data}
          responsive={false}
          labelRadius={({ innerRadius }) => innerRadius + 30 }
          labels={({ datum }) => datum.y}
          style={{
            data: { colorScale: 'grayscale' },
            labels: {
              fill: 'white', fontSize: 8,
              padding: 8
            }
          }}
        />
        < VictoryAxis 
          style={{ 
            axis: { stroke: 'none' },
            tickLabels: { fill: 'none' }
          }} 
        />
        <VictoryLegend x={280} y={55}
          data={makeLabel(data)}
          title='Facility'
          orientation='vertical'
          gutter={0}
          rowGutter={{ top: 0, bottom: 0 }}
          style={{ 
            labels: {
              fontSize: 9
            },
            title: {
              fontSize: 11
            }
          }}
        />
      </VictoryChart>
    ) : 'loading';
};

Pie.propTypes = {
  data: PropTypes.array.isRequired,
  county: PropTypes.string.isRequired
};

export default Pie;
