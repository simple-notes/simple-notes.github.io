import { googleSignInProperties } from '../config';

export const signIn = () => {
  return new Promise((resolve) => {
    let { url, params } = googleSignInProperties;
    if (params) {
      const paramString = Object.keys(params)
        .map(param => `${param}=${params[param]}`)
        .join('&');
      url += `?${paramString}`;
    };
    const win = window.open(url, 'signin', 'modal');
    const timer = setInterval(() => {
      if (!win.closed) {
        return;
      };
      resolve();
      clearInterval(timer);
    }, 500);
  });
};

export const parseHash = (hash) => {
  if (hash) {
    const { error, access_token } = hash
      .substring(1)
      .split('&')
      .reduce((store, param) => {
        param = param.split('=');
        store[param[0]] = param[1];
        return store;
      }, {});
    if (error) {
      window.close();
    } else if (access_token) {
      saveToken(access_token);
    };
  };
  window.close();
};

const saveToken = token => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};
