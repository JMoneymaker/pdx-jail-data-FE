import { VictoryChart, VictoryLabel, VictoryPie, VictoryAxis, VictoryLegend } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const Pie = ({ county, data }) => {

  const labelData = (data) => {
    return data.map(facility => ({
      name: facility.x
    }));
  };

  return (
    <div className={styles.chartWrapper}>
      <VictoryChart
        width={400}
        height={225}
      >
        <VictoryLabel 
          text={county.toUpperCase() + ' COUNTY'}
          x={160} 
          y={25}
          style={{
            fontSize: 7.5,
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
        <VictoryLegend x={280} y={47}
          data={labelData(data)}
          title='Facility'
          orientation='vertical'
          gutter={0}
          rowGutter={{ top: 0, bottom: 0 }}
          style={{ 
            labels: {
              fontSize: 5,
            },
            title: {
              fontSize: 7
            }
          }}
        />
      </VictoryChart>
    </div>
  );
};

Pie.propTypes = {
  county: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Pie;
