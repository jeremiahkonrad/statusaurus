import React, { useEffect, useReducer } from 'react';
import './App.css';
import { getStatus } from './api/api';
import { API_LIST, INTERVAL_TO_CHECK_MS } from './constants';
import reducer from './reducer';
import { RECEIVED_STATUS, STATUS_OK, STATUS_OUTAGE } from './actions';
import Outages from './components/outages/outages';
import StatusTable from './components/status-table/status-table';

const initialState = { apis: {}, outages: [] };

const getApis = (dispatch) =>
  API_LIST.forEach((api) => {
    getStatus(api).then((apiStatus) => {
      dispatch({ type: RECEIVED_STATUS, apiName: api, status: apiStatus });
      if (apiStatus?.success || false !== true) {
        dispatch({ type: STATUS_OUTAGE, apiName: api });
      }
      if (apiStatus?.success === true) {
        dispatch({ type: STATUS_OK, apiName: api });
      }
    });
  });
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // run first time
    getApis(dispatch);

    const checkApis = setInterval(() => {
      getApis(dispatch);
    }, INTERVAL_TO_CHECK_MS);

    return () => {
      clearInterval(checkApis);
    };
  }, []);

  return (
    <div className="statusaurus">
      <h1>Statusaurus</h1>
      <h3>Quick glance at the statuses of our API (refreshes automatically)</h3>
      <Outages outages={state.outages} />
      <StatusTable statuses={state.apis} />
    </div>
  );
};

export default App;
