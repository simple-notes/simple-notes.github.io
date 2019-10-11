import { getNotesByParams } from '../services/library';

export const GET_NOTES_REQUEST = 'GET_NOTES_REQUEST';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAIL = 'GET_NOTES_FAIL';

export const getNotes = (query) => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_NOTES_REQUEST,
        payload: query
      });
      const res = await getNotesByParams(query);
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: res
      });
    } catch {
      dispatch({
        type: GET_NOTES_FAIL
      });
    };
  };
};
