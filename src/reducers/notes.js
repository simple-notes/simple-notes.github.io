import { GET_NOTES_REQUEST, GET_NOTES_SUCCESS, GET_NOTES_FAIL } from '../actions/notes';

const initialState = {
  query: '',
  isFetching: false,
  notes: []
};

export const notesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTES_REQUEST:
      return { ...state, query: payload, isFetching: true };
    case GET_NOTES_SUCCESS:
      return { ...state, notes: payload, isFetching: false };
    case GET_NOTES_FAIL:
      return { ...state, isFetching: false };
    default:
      return state;
  };
};
