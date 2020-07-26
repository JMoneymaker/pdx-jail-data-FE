import { VictoryChart, VictoryLabel, VictoryPie, VictoryAxis, VictoryLegend } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';

const Pie = ({ data }) => {

  const makeLabel = array => {
    return array.map(obj => {
      return ({
        name: obj.facility
      });
    });
  };

  const vForVictory = (array, category) => {
    return array.map(item => {
      return ({
        x: category,
        y: item.total
      });
    });
  };


  return data.length > 0 ?
    (
      <VictoryChart
      // width={400}
        height={220}
        padding={{ top: 30, bottom: 30, left: 30, right: 120 }}
      >
        <VictoryLabel 
          text={data[0].county + ' ' + 'County'}
          x={175} 
          y={4}
          style={{
            fontSize: 10
          }}          
        />
        <VictoryPie
          data={vForVictory(data, 'item.facility')}
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
  data: PropTypes.array.isRequired
};

export default Pie;
