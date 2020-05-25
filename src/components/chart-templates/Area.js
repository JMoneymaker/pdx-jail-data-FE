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
            // mouseFollowTooltips
            labels={({ datum }) => `Date: ${datum.x}\n # in Detention: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={1.5}
                pointerLength={12} 
                flyoutStyle={{
                  fontSize: 3,
                  fontFamily: 'Roboto Condensed, sans-serif',
                  stroke: '#525252',
                  strokeWidth: .5,
                  fill: '#FFFFFF',
                  padding: 0
                }}
              />
            }
          />
        }
      >
        <VictoryArea 
          data={[...data[1]]}
          style={{
            data: { 
              stroke: '#FFFFFF', 
              fill: '#252525' 
            },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
        />
        <VictoryArea 
          data={[...data[2]]}
          style={{
            data: { 
              stroke: '#FFFFFF', 
              fill: '#737373' 
            },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
        />
        <VictoryArea 
          data={[...data[0]]}
          style={{
            data: { 
              stroke: '#FFFFFF', 
              fill: '#525252' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
        />
        <VictoryAxis
          label={yLabel}
          // fixLabelOverlap={true}
          style={{
            axisLabel: { padding: 20, fontSize: 8 },
            tickLabels: {
              fontSize: 4.5,
              fontFamily: 'Roboto Condensed, sans-serif',
              fillOpacity: 1,
              margin: 2,
              padding: 8,
              angle: 40
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
            { name: 'Multnomah' }, 
            { name: 'Washington' }, 
            { name: 'Clackamas' }
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
