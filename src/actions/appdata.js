import drive from '../services/drive';
import library from '../services/library';

export const APPDATA_REQUEST = 'APPDATA_REQUEST';
export const APPDATA_REQUEST_SUCCESS = 'APPDATA_REQUEST_SUCCESS';
export const APPDATA_REQUEST_FAIL = 'APPDATA_REQUEST_FAIL';

export const initAppdata = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: APPDATA_REQUEST
      });
      await drive.initDrive();
      await library.initLibrary();
      dispatch({
        type: APPDATA_REQUEST_SUCCESS
      });
    } catch ({ message }) {
      dispatch({
        type: APPDATA_REQUEST_FAIL,
        payload: {
          error: message
        }
      });
    };
  };
};
