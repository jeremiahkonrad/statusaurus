import React, { useEffect, useState } from 'react';
import './App.css';
import { getStatus } from './api/api';
import { API_LIST } from './constants';

const App = () => {
  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    API_LIST.forEach((api) => {
      getStatus(api).then((apiStatus) => {
        setStatuses((existing) => ({
          ...existing,
          [api]: apiStatus,
        }));
      });
    });
  }, []);

  return (
    <div>
      <h1>Statusaurus</h1>
      {Object.keys(statuses).map((apiName) => (
        <p key={apiName}>{apiName}</p>
      ))}
    </div>
  );
};

export default App;
