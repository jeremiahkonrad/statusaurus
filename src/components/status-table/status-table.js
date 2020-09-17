import React from 'react';
import StatusRow from './status-row/status-row';

const StatusTable = ({ statuses }) => {
  return (
    <table className="status-table">
      <thead className="status-table-header">
        <tr>
          <td>API</td>
          <td>Time</td>
          <td>Hostname</td>
          <td>Message</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(statuses).map((apiName) => (
          <StatusRow api={apiName} status={statuses[apiName]} />
        ))}
      </tbody>
    </table>
  );
};

export default StatusTable;
