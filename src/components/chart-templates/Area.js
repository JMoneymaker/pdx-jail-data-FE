import { VictoryArea, VictoryChart, VictoryAxis, VictoryLegend, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import { makePrettyDate } from '../../utils/dailyCounts';

const Area = ({ data, yLabel, xLabel }) => {

  return (
    <VictoryChart
      height={225}
      padding={{ top: 40, bottom: 55, left: 50, right: 50 }}
      containerComponent={
        <VictoryVoronoiContainer
          // mouseFollowTooltips
          labels={({ datum }) => `${makePrettyDate(datum.x).slice(0, -9)}\n People in Detention: ${datum.y} `}
          labelComponent={
            <VictoryTooltip
              orientation = {'top'}
              pointerLength = {5}
              pointerWidth = {3}
              cornerRadius = {3}
              style={{
                fontSize: 8,
                paddingLeft: 0,
                paddingRight: 0,
                overflow: 'visible',
              }} 
              flyoutStyle={{
                fontFamily: 'Roboto Condensed, sans-serif',
                stroke: '#525252',
                strokeWidth: .5,
                fill: '#FFFFFF',
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
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif'
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
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif'
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
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif'
          }
        }}
      />
      <VictoryAxis
        label={yLabel}
        fixLabelOverlap={true}
        style={{
          axisLabel: { padding: 25, fontSize: 10 },
          tickLabels: {
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif',
            fillOpacity: 1,
            margin: 2,
            padding: 8
            // angle: 40
          }
        }} 
      />
      <VictoryAxis dependentAxis
        label={xLabel}
        style={{
          axisLabel: { padding: 25, fontSize: 10 },
          tickLabels: {
            fontSize: 8,
            fontFamily: 'Roboto Condensed, sans-serif',
            fillOpacity: 1,
            margin: 0,
            padding: 4
          }
        }}
      />
      <VictoryLegend x={70} y={10}
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{ 
          labels: { 
            fontSize: 8, 
            fontFamily: 'Roboto Condensed, sans-serif'
          }
        }}
        colorScale={['#252525', '#737373', '#525252']}
        data={[
          { name: 'Multnomah County' }, 
          { name: 'Washington County' }, 
          { name: 'Clackamas County' }
        ]}
      />
    </VictoryChart>
  );
};

Area.propTypes = {
  data: PropTypes.array.isRequired,
  yLabel: PropTypes.string.isRequired,
  xLabel: PropTypes.string.isRequired
};

export default Area;
