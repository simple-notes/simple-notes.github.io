import { APPDATA_REQUEST, APPDATA_REQUEST_SUCCESS, APPDATA_REQUEST_FAIL } from '../actions/appdata';

const initialState = {
  error: null,
  isFetching: false,
  isInited: false
};

export const appdataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case APPDATA_REQUEST:
      return { ...state, isFetching: true };
    case APPDATA_REQUEST_SUCCESS:
      return { ...state, isFetching: false, isInited: true };
    case APPDATA_REQUEST_FAIL:
      return { ...state, ...payload, isFetching: false };
    default:
      return state;
  };
};
