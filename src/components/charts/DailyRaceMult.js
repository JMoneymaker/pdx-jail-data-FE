import { ResponsiveBar } from '@nivo/bar';
import { getDailyRaceCount } from '../../services/getMultnomahDaily';
import React, { useState, useEffect } from 'react';
import styles from './Charts.css';

const DailyRaceMult = () => {

  const [data, setData] = useState(['loading']);
  
  useEffect(() => {
    getDailyRaceCount()
      .then(res => {setData(res);});
  }, []);

  const alphabetical = data.sort(function(a, b){
    if(a._id < b._id) { return -1; }
    if(a._id > b._id) { return 1; }
    return 0;
  });
  const complete = alphabetical.map(item => {
    if(item._id === 'P'){
      item._id = 'Pacific Islander';
    } return item;
  });
  const mappedData = complete.map(item => {
    return ({
      id: item._id,
      total: item.total
    });
  });
  
  return (
    <div className={styles.chartPageContainer}>
      <h3>Number of People in Custordy by Race</h3>
      <div className={styles.chartWrapper}>
        <ResponsiveBar
          data={mappedData}
          keys={['id', 'total']}
          indexBy="id"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.4}
          colors={'black'}
          borderColor={'white'}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'race',
            legendPosition: 'middle',
            legendOffset: 40
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'number of people in jail today',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelTextColor={'white'}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </div>
  );
};

export default DailyRaceMult;
