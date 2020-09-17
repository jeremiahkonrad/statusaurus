import React from 'react';

const Outages = ({ outages }) => (
  <div className="outages">
    <p>
      <strong>{`Current Outages(${outages.length}): [${outages.join(
        ', '
      )}]`}</strong>
    </p>
    <p>
      *Note `messages` and `users` APIs may render as a false positive once CORS
      proxy hits rate-limiting
      <br />
      The number of requests is limited to 200 per 60 minutes.
    </p>
  </div>
);

export default Outages;
