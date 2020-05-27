import React from 'react';
import { CSVLink } from 'react-csv';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import downloadImage from '../../assets/download.png';

const CSV = ({ data, filename }) => {
  return (
    <CSVLink 
      data={[...data]}
      filename={filename}
      target='_blank'>
      <p className={styles.downloadContainer}>
        <img className={styles.downloadImage} src={downloadImage} alt='download' />
        <span className={styles.toolTip}>Download</span>
      </p>
    </CSVLink>
  );
};

CSV.propTypes = {
  data: PropTypes.array.isRequired,
  filename: PropTypes.string.isRequired
};

export default CSV;
