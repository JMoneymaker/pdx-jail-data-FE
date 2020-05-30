import { VictoryArea, VictoryChart, VictoryAxis, VictoryLegend, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
import React from 'react';
import PropTypes from 'prop-types';
import { makePrettyDate } from '../../utils/dailyCounts';

const Area = ({ data, yLabel, xLabel }) => {

  return (
    <VictoryChart
      // width={400}
      height={220}
      padding={{ top: 40, bottom: 30, left: 45, right: 30 }}
      containerComponent={
        <VictoryVoronoiContainer
          // mouseFollowTooltips
          labels={({ datum }) => `${makePrettyDate(datum.x).slice(0, -9)}\n People in Detention: ${datum.y} `}
          labelComponent={
            <VictoryTooltip
              cornerRadius={1.5}
              pointerLength={12}
              style={{
                fontSize: 5
              }} 
              flyoutStyle={{
                fontFamily: 'Roboto Condensed, sans-serif',
                stroke: '#525252',
                strokeWidth: .5,
                fill: '#FFFFFF',
                padding: 0,
                paddingLeft: -5
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
            fontSize: 4,
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
            fontSize: 4,
            fontFamily: 'Roboto Condensed, sans-serif'
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
            padding: 8
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
      <VictoryLegend x={115} y={15}
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{ 
          labels: { 
            fontSize: 6, 
            fontFamily: 'Roboto Condensed, sans-serif'
          },
          title: { fontSize: 8 }
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
