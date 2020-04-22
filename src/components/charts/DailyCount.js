import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { getDailyDetentionCounts } from '../../services/getDetentions';
import styles from './Charts.css';


const DailyDetentionCounts = () => {
  const [detentionCounts, setDetentionCounts] = useState('loading');
      
  useEffect(() => {
    getDailyDetentionCounts()
      .then(res => {
        const displayData = res.counts.map(item => {
          let container = [];
          container.push(item['date'].toString().slice(6, -14));
          container.push(item.count);
          return container;
        });
        setDetentionCounts(displayData.slice(1)); //data from Jan 16 is bogus
      });
  }, []);

  return (
    <section className={styles.ChartWrapper}>
      <h2 className={styles.chartTitle}>Daily 2020 Detention Totals</h2>
      <div className={styles.ChartContainer}>
        <Chart
          chartType="LineChart"
          loader={<div>Loading</div>}
          data= {[['', ''], //optional labels for axes
            ...detentionCounts]}
          options={{
            titleTextStyle: { 
              color: 'black', 
              fontName: 'Roboto', 
              fontSize: '16' },
            chartArea: { width:'80%', height:'60%' },
            vAxis: { title: 'People in detention' },
            pointSize: 2,
            legend: { position: 'none' }
          }}
        />
      </div>
    </section>
  );
};

export default DailyDetentionCounts;
