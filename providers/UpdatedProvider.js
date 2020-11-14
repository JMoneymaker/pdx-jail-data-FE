import React, { useState, useEffect } from 'react';
import { UpdatedContext } from '../src/hooks/useUpdatedContext';
import { getTwoDayTotal } from '../src/services/jailDataApi';

// eslint-disable-next-line react/prop-types
const UpdatedProvider = ({ children }) => {
  const [updated, setUpdated] = useState('');

  useEffect(() => {
    getTwoDayTotal('multnomah')
      .then(res => setUpdated(res.date + ' at ' + res.time));
  }, []);

  return (
    <UpdatedContext.Provider value={updated}>
      {children}
    </UpdatedContext.Provider>
  );
};

export default UpdatedProvider;

