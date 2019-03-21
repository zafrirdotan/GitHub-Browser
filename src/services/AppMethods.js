
// This method parses url query parameters to an object.
const parseSearchParams = searchParamsString => {
  const params = {};
  if (searchParamsString && searchParamsString.indexOf('?') === 0) {
    searchParamsString
      .slice(searchParamsString.indexOf('?') + 1)
      .split('&')
      .forEach(str => {
        let paramsArr = str.split('=');
        if (paramsArr[0] && paramsArr[1]) {
          params[paramsArr[0]] = paramsArr[1];
        }
      });
  }
  return params;
};

export default {
  parseSearchParams,
};
