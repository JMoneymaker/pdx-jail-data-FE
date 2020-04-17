import React from 'react';
import PropTypes from 'prop-types';


const DynamicDataDisplay = ({ children, hook }) => {
  const { data } = hook();
  if(data === 0) return (

    <div>
      <h3>{children}</h3>
      <div>
        <p>Loading</p>
      </div>
    </div>
  );
  return (
    <div>
      <h3>{children}</h3>
      <div>
        <h2>{data}</h2>
      </div>
    </div>
  );
};

DynamicDataDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.number.isRequired,
  hook: PropTypes.func.isRequired
};

export default DynamicDataDisplay;
