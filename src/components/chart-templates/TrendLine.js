import { VictoryLine, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const TrendLine = ({ data, yLabel, xLabel }) => {

  return (
    <div className={styles.ChartWrapper}>
      <VictoryChart
        domainPadding={1}
        width={400}
        height={215}
        
      >
        <VictoryLine 
          data={[...data[1]]}
          fixLabelOverlap={true}
          animate={{
            animationWhitelist: ['style', 'data'],
            onEnter: {
              duration: 1000,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}
          style={{
            data: { stroke: '#252525' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
          labels={({ datum }) => datum.y}
        />
        <VictoryLine 
          data={[...data[2]]}
          animate={{
            animationWhitelist: ['style', 'data'],
            onEnter: {
              duration: 1000,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}
          style={{
            data: { stroke: '#737373' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
              fill: 'white'
            }
          }}
          labels={({ datum }) => datum.y}
        />
        <VictoryLine 
          data={[...data[0]]} 
          animate={{
            animationWhitelist: ['style', 'data'],
            onEnter: {
              duration: 1000,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}

          style={{
            data: { stroke: '#525252' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
              fill: 'white'
            }
          }}
          labels={({ datum }) => datum.y}
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

TrendLine.propTypes = {
  data: PropTypes.array.isRequired,
  yLabel: PropTypes.string.isRequired,
  xLabel: PropTypes.string.isRequired
};

export default TrendLine;
