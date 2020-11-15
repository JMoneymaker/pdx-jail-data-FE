import React, { useState, useEffect } from 'react';
import { UpdatedContext } from '../src/hooks/useUpdatedContext';
import { makePrettyDate, makeShortDate } from '../src/data-shapers/shapeDates';
import { getMostRecentUpdate } from '../src/services/jailDataApi';


// eslint-disable-next-line react/prop-types
const UpdatedProvider = ({ children }) => {
  const [updated, setUpdated] = useState('');
  const [shortUpdated, setShortUpdated] = useState('');
  

  useEffect(() => {
    getMostRecentUpdate()
      .then(res => {
        setUpdated(makePrettyDate(res));
        setShortUpdated(makeShortDate(res));
      });
  }, []);

  return (
    <UpdatedContext.Provider value={{ updated, shortUpdated }}>
      {children}
    </UpdatedContext.Provider>
  );
};

export default UpdatedProvider;

