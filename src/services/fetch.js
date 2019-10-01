import axios from 'axios';
import { getToken, signIn } from './auth';
import { baseUrl } from '../config';

//-------------------old-------------
const notes = [{
  id: '1',
  title: 'First note',
  namespaces: ['first', 'second'],
  body: 'text'
}, {
  id: '2',
  title: 'Second note',
  namespaces: ['first'],
  body: 'text text'
}];

export const fetchNotes = (query) => {
  return new Promise(resolve => {
    const filtered = notes.filter(note => {
      const { title } = note;
      return title.toLowerCase().includes(query);
    });
    setTimeout(() => resolve(filtered), 1000);
  });
};
//------------------------------------------------

export const fetch = async (addUrl, options) => {
  const token = getToken();
  if (!!token) {
    try {
      const url = baseUrl + addUrl;
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
