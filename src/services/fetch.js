import axios from 'axios';
import { getToken, signIn } from './auth';
import { googleApiBaseUrl } from '../config';

export const fetch = async (addUrl, options, tryCount = 0) => {
  if (tryCount === 3) {
    throw new Error('Request rejected three times');
  } 
  tryCount += 1;
  const token = getToken();
  if (token) {
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
        return await fetch(addUrl, options, tryCount);
      } else {
        throw new Error(err.message);
      };
    };
  } else {
    await signIn();
    return await fetch(addUrl, options, tryCount);
  };
};
