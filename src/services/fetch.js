import axios from 'axios';
import { getToken, signIn } from './auth';
import { googleApiBaseUrl } from '../config';

export const fetch = async (addUrl, options) => {
  const token = getToken();
  if (!!token) {
    try {
      const url = googleApiBaseUrl + addUrl;
      const headers = {
        'Authorization': `Bearer ${token}`
      };
      const { data } = await axios({
        url,
        headers,
        ...options
      });
      return data;
    } catch (err) {
      if (err.response && err.response.status === 401) {
        await signIn();
        return await fetch(addUrl, options);
      } else {
        throw new Error(err.message);
      };
    };
  } else {
    await signIn();
    return await fetch(addUrl, options);
  };
};
