import { VictoryChart, VictoryLabel, VictoryPie, VictoryAxis, VictoryLegend } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyFacilityCount } from '../../services/getDailyCounts';
import { shapeFacility } from '../../utils/dailyCounts';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const DailyCountFacility = ({ county }) => {
  const [facilityData, setFacilityData] = useState([]);
  
  useEffect(() => {
    getDailyFacilityCount(county)
      .then(res => {setFacilityData(res);});
  }, [county]);

  const data = shapeFacility(facilityData);  

  const labelData = (facilityData) => {
    return facilityData.map(facility => ({
      name: facility._id
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
          data={labelData(facilityData)}
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

DailyCountFacility.propTypes = {
  county: PropTypes.string.isRequired,
};

export default DailyCountFacility;
