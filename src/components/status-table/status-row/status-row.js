import React from 'react';

const StatusRow = ({ api, status }) => {
  const success = status?.success || false;
  const message = status?.message || 'outage';
  const hostname = status?.hostname || 'n/a';
  const time = status?.time || 'n/a';

  return (
    <tr className={success ? 'api-up' : 'api-outage'}>
      <td className="api-name">{api}</td>
      <td>{time}</td>
      <td>{hostname}</td>
      <td>{success ? message : <strong>{message}</strong>}</td>
    </tr>
  );
};

export default StatusRow;
