import { googleSignInProperties } from '../config';

export const signIn = () => {
  return new Promise(() => {
    let { url, params } = googleSignInProperties;
    if (params) {
      const paramString = Object.keys(params)
        .map((param) => {
          return `${param}=${params[param]}`;
        })
        .join('&');
      url += `?${paramString}`;
    };
    window.open(url, 'Google SignIn', 'modal');
  });
};

export const parseHash = hash => {
  const token = hash
    .substring(1)
    .split('&')
    .find((param) => {
      return param.startsWith('access_token');
    })
    .split('=')[1];
  saveToken(token);
  window.close();
};

const saveToken = token => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};
