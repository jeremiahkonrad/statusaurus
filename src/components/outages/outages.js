import React from 'react';

const Outages = ({ outages }) => (
  <p>{`Current Outages(${outages.length}): [${outages.join(', ')}]`}</p>
);

export default Outages;
