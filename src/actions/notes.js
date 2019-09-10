import { fetchNotes } from '../services/fetch'

export const GET_NOTES_REQUEST = 'GET_NOTES_REQUEST';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAIL = 'GET_NOTES_FAIL';

export const getNotes = (query) => {
  return dispatch => {
    dispatch({
      type: GET_NOTES_REQUEST,
      payload: query
    });
    fetchNotes(query)
      .then(res => {
        dispatch({
          type: GET_NOTES_SUCCESS,
          payload: res
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NOTES_FAIL
        });
      });
  };
};
