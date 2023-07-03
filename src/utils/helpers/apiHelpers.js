import { servicesAccessibleWithoutToken } from '../../constants';

export const isApiAccessibleWithoutToken = (requestUrl) => {
  const requestUrlWithoutQueryString = requestUrl.split('?')[0];
  return servicesAccessibleWithoutToken.includes(requestUrlWithoutQueryString);
};

export const getQueryParams = (params) => {
  let queryString = '';
  Object.keys(params).forEach((key, index) => {
    if (index === 0) {
      queryString += '?';
    } else if (index > 0) {
      queryString += '&';
    }
    const val = typeof params[key] === 'string' ? params[key] : JSON.stringify(params[key]);
    queryString += `${key}=${val}`;
  });
  return queryString;
};
