import React, { useEffect, useReducer } from 'react';
import './App.css';
import { getStatus } from './api/api';
import { API_LIST } from './constants';
import reducer from './reducer';
import { RECEIVED_STATUS, STATUS_OK, STATUS_OUTAGE } from './actions';
import Outages from './components/outages/outages';
import TableRow from './components/table/table-row/table-row';

const initialState = { apis: {}, outages: [] };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    API_LIST.forEach((api) => {
      getStatus(api).then((apiStatus) => {
        dispatch({ type: RECEIVED_STATUS, apiName: api, status: apiStatus });
        if (apiStatus?.success !== true) {
          dispatch({ type: STATUS_OUTAGE, apiName: api });
        }
        if (apiStatus?.success === true) {
          dispatch({ type: STATUS_OK, apiName: api });
        }
      });
    });
  }, []);

  return (
    <div>
      <h1>Statusaurus</h1>
      <Outages outages={state.outages} />
      <table>
        {Object.keys(state.apis).map((apiName) => (
          <TableRow api={apiName} status={state.apis[apiName]} />
        ))}
      </table>
    </div>
  );
};

export default App;
