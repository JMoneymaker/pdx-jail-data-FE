import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';
import useDailyAverageDetentionByRace from '../../hooks/useDailyAverageDetentionMult';
import useCSVUpdated from '../../hooks/useCSVUpdated';
import downloadImage from '../../assets/download.png';

const DailyAverageDetentionHBar = () => {
  const [county, setCounty] = useState('multnomah');
  const data = useDailyAverageDetentionByRace(county);
  const updated = useCSVUpdated();
  const csvData = data.map(item => {
    return ({
      date: updated,
      county: county,
      stay: item.x,
      count: item.y
    });
  });

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange} 
            name={'avg-detention-radio'} 
            id={'avg-detention'} 
            title={'Daily Snapshot'}
            category={'Average Length of Stay by Race'}> 
          </Header>
          <CSVLink 
            data={[...csvData]}
            filename={`jdpdx-avg-stay-byRace-${updated}-${county}.csv`}
            target='_blank'
          ><p className={styles.downloadContainer}><img className={styles.downloadImage} src={downloadImage} alt='download' /><span className={styles.toolTip}>Download Data</span></p>
          </CSVLink>
        </header>
        <section className={styles.chartWrapper}>
          <VBar 
            data={data} 
            county={county} 
            xLabel={'Number of Days in Detention'} 
            yLabel={'Race'} />
        </section>
      </section>
    </>
  );
};

export default DailyAverageDetentionHBar;

