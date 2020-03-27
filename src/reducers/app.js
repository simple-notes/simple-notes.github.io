import { combineReducers } from 'redux';

const isOnline = (state = false, action ) => {
  switch (action.type) {
    case 'options/changeOnlineStatus':
      return action.payload.status;
    default:
      return state;
  };
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'options/fetching':
      return true;
    case 'options/success':
    case 'options/failure':
      return false;
    default:
      return state;
  };
};

const isLoaded = (state = false, action) => {
  switch (action.type) {
    case 'options/success':
      return true;
    default:
      return state;
  };
};

const filesIdsByName = (state = {}, action) => {
  switch (action.type) {
    case 'options/success':
      return { ...state, ...action.payload.options.fileIds };
    default:
      return state;
  };
};

const app = combineReducers({
  isOnline,
  isFetching,
  isLoaded,
  filesIdsByName
});

export default app;
