import React from 'react';
import { CSVLink } from 'react-csv';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/ChartScroll.css';
import downloadImage from '../../assets/download6.png';
import Modal from 'react-modal';
Modal.setAppElement(document.getElementById('root'));

const CSV = ({ data, filename }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div>
      {/* <img className={styles.downloadImage} src={downloadImage} alt='download' /> */}
      <div >
        <button 
          onClick={openModal}
          className={styles.downloadHider}>
          <img 
            className={styles.downloadImage}
            src={downloadImage}
          />
          <p className={styles.downloadContainer}>
            {/* <span className={styles.toolTip}>Download a CSV of this data</span> */}
          </p>
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        className={styles.modal}
      >
        <div>
          <p className={styles.csv}>
            <CSVLink 
              data={[...data]}
              filename={filename}
              target='_blank'>
            download complete data
              <br/>
            </CSVLink>
          </p>

          {filename.slice(0, 21) == 'jdpdx-TriCountyTotals' &&
            <p className={styles.csv}>
              <CSVLink 
                data={[...data].slice(-1)}
                filename={filename}
                target='_blank'>
            download data for today
              </CSVLink>
            </p>
          }
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

CSV.propTypes = {
  data: PropTypes.array.isRequired,
  filename: PropTypes.string.isRequired
};

export default CSV;
