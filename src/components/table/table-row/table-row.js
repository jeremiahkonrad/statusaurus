import React from 'react';

const TableRow = ({ api, status }) => {
  const message = status?.message || 'outage';
  const hostname = status?.hostname || 'n/a';
  const time = status?.time || 'n/a';

  return (
    <tr>
      <td>{api}</td>
      <td>{time}</td>
      <td>{hostname}</td>
      <td>{message}</td>
    </tr>
  );
};

export default TableRow;
