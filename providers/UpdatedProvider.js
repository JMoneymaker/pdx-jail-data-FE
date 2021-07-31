import React, { useState, useEffect } from 'react';
import { UpdatedContext } from '../src/hooks/useUpdatedContext';
import { makePrettyDate, makeShortDate } from '../src/data-shapers/shapeDates';

// eslint-disable-next-line react/prop-types
const UpdatedProvider = ({ children }) => {
  const [updated, setUpdated] = useState('');
  const [shortUpdated, setShortUpdated] = useState('');
  
  useEffect(() => {
    setUpdated(makePrettyDate('2021-05-12T14:00:14.902+00:00'
    ));
    setShortUpdated(makeShortDate('2021-05-12T14:00:14.902+00:00'));
  }, []);

  return (
    <UpdatedContext.Provider value={{ updated, shortUpdated }}>
      {children}
    </UpdatedContext.Provider>
  );
};

export default UpdatedProvider;

