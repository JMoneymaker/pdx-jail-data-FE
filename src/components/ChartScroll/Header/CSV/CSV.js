import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import styles from './CSV.css';
import downloadImage from './download6.png';

const CSV = ({ csv }) => {

  return (

    <div className={styles.CSV}>
      {csv.data ? 
        <CSVLink 
          data={csv.data}
          filename={csv.filename}
          target='_blank'>
          <p className={styles.downloadContainer}>
            <img className={styles.downloadImage} src={downloadImage} alt='download' />
            <span className={styles.toolTip}>Download a CSV of this data</span>
          </p>
        </CSVLink> 
        : null}
    </div>

  );
};

CSV.propTypes = {
  csv: PropTypes.object.isRequired
};

export default CSV;
