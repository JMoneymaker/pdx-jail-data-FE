import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import UpdatedProvider from '../providers/UpdatedProvider';
// import './styles.css';

render(
  <UpdatedProvider>
    <App />
  </UpdatedProvider>,
  document.getElementById('root')
);
