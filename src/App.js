import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getStatus } from './api/api';
import { API_LIST } from './constants';

const App = () => {
  useEffect(() => {
    getStatus(API_LIST[0]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Statusaurus</p>
      </header>
    </div>
  );
};

export default App;
