const getApiEndpoint = (apiName) =>
  `https://api.factoryfour.com/${apiName}/health/status`;

export const getStatus = (apiName) =>
  fetch(getApiEndpoint(apiName))
    .then((response) => response.json())
    .catch((err) => console.error(err)); // report to some central logging
