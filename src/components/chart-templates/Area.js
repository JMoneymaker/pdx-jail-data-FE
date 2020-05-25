import { VictoryArea, VictoryChart, VictoryAxis, VictoryLegend, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const Area = ({ data, yLabel, xLabel }) => {

  return (
    <div className={styles.ChartWrapper}>
      <VictoryChart
        width={400}
        height={215}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `Date: ${datum.x}\n Number Detained: ${datum.y}`}
            labelComponent={
              <VictoryTooltip  
                flyoutStyle={{
                  fontSize: 4,
                  fontFamily: 'Roboto Condensed, sans-serif',
                  stroke: '#FFFFFF,',
                  fill: '#FFFFFF'
                }}
              />
            }
          />
        }
      >
        <VictoryArea 
          data={[...data[1]]}
          style={{
            data: { stroke: '#252525', fill: '#252525' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
        />
        <VictoryArea 
          data={[...data[2]]}
          style={{
            data: { stroke: '#737373', fill: '#737373' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
        />
        <VictoryArea 
          data={[...data[0]]}
          style={{
            data: { stroke: '#525252', fill: '#525252' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
        />
        <VictoryAxis
          label={yLabel}
          fixLabelOverlap={true}
          style={{
            axisLabel: { padding: 20, fontSize: 8 },
            tickLabels: {
              fontSize: 4.5,
              fontFamily: 'Roboto Condensed, sans-serif',
              fillOpacity: 1,
              margin: 2,
              padding: 8,
              // angle: 40
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
        <VictoryLegend x={108} y={10}
          title="County"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ 
            // border: { stroke: 'black' }, 
            labels: { 
              fontSize: 6, 
              fontFamily: 'Roboto Condensed, sans-serif'
            },
            title: { fontSize: 8 }
          }}
          colorScale={['#252525', '#737373', '#525252']}
          data={[
            { name: 'Multnomah' }, { name: 'Washington' }, { name: 'Clackamas' }
          ]}
        />
      </VictoryChart>
    </div>
  );
};

Area.propTypes = {
  data: PropTypes.array.isRequired,
  yLabel: PropTypes.string.isRequired,
  xLabel: PropTypes.string.isRequired
};

export default Area;
