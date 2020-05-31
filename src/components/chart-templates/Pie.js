import { VictoryChart, VictoryLabel, VictoryPie, VictoryAxis, VictoryLegend } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';

const Pie = ({ county, data }) => {

  const labelData = (data) => {
    return data.map(facility => ({
      name: facility.x
    }));
  };

  return (
    <VictoryChart
      // width={400}
      height={220}
      padding={{ top: 30, bottom: 30, left: 30, right: 120 }}
    >
      <VictoryLabel 
        text={county.toUpperCase() + ' COUNTY'}
        x={175} 
        y={4}
        style={{
          fontSize: 12
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
        data={labelData(data)}
        title='Facility'
        orientation='vertical'
        gutter={0}
        rowGutter={{ top: 0, bottom: 0 }}
        style={{ 
          labels: {
            fontSize: 10
          },
          title: {
            fontSize: 12
          }
        }}
      />
    </VictoryChart>
  );
};

Pie.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Pie;
