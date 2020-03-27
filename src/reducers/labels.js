import { combineReducers } from 'redux';

const newLabelId = (state = null, action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.labels.newLabelId;
    default:
      return state;
  };
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.labels.byId;
    default:
      return state;
  };
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.labels.allIds;
    default:
      return state;
  };
};

const updateAt = (state = null, action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.labels.updateAt;
    default:
      return state;
  };
};

const labels = combineReducers({
  newLabelId,
  byId,
  allIds,
  updateAt
});

export default labels;
