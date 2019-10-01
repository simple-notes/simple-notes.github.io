import { googleSignInProperties } from '../config';

export const signIn = () => {
  return new Promise((resolve) => {
    let { url, params } = googleSignInProperties;
    if (params) {
      url += '?' + Object.keys(params).map(param => {
        return `${param}=${params[param]}`;
      }).join('&');
    };
    const wnd = window.open(url, 'Google SignIn', 'modal');
    if (wnd.closed) resolve();
  });
};

export const saveHash = hash => {
  const params = {};

  hash.substring(1).match(/[^&]+/g).forEach(param => {
    let m = param.match(/[^=]+/g);
    params[decodeURIComponent(m[0])] = decodeURIComponent(m[1]);
  });

  if (Object.keys(params).length > 0) {
    setParams(JSON.stringify(params));
  };

  window.close();
};

const setParams = params => {
  localStorage.setItem('params', params);
};

const getParams = () => {
  return JSON.parse(localStorage.getItem('params'));
};

export const getToken = () => {
  const params = getParams();
  if (params) {
    return params['access_token'];
  };
};
