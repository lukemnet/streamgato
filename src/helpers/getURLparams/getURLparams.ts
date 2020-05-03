const getURLparams = () => {
  const queryString = window.location.search.substring(1);
  const parsedParams = decodeURI(queryString)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g,'":"');

  return queryString
    ? JSON.parse(`{"${parsedParams}"}`)
    : {};
};

export default getURLparams;
