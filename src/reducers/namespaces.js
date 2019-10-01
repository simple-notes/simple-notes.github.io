import { GET_NAMESPACES } from '../actions/namespaces';

const initialState = {
  namespaces: {}
};

export const namespacesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NAMESPACES:
      return { ...state, ...payload };
    default:
      return state;
  };
};
