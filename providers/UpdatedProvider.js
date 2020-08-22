import React, { useState, useEffect } from 'react';
import { UpdatedContext } from '../src/hooks/useUpdatedContext';
import { findLatest } from '../src/utils/dailyCounts';
import { getDailyCounts } from '../src/services/jailDataApi';

// eslint-disable-next-line react/prop-types
const UpdatedProvider = ({ children }) => {
  const [updated, setUpdated] = useState('');

  useEffect(() => {
    getDailyCounts()
      .then(res => setUpdated(findLatest(res)));
  }, []);

  return (
    <UpdatedContext.Provider value={updated}>
      {children}
    </UpdatedContext.Provider>
  );
};

export default UpdatedProvider;

