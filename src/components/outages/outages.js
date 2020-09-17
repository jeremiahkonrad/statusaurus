import React from 'react';

const Outages = ({ outages }) => (
  <>
    <p>{`Current Outages(${outages.length}): [${outages.join(', ')}]`}</p>
    <p>
      *Note `messages` and `users` APIs may render as a false positive once CORS
      proxy hits rate-limiting
      <br />
      The number of requests is limited to 200 per 60 minutes.
    </p>
  </>
);

export default Outages;
