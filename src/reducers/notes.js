import { combineReducers } from 'redux';

const newNoteId = (state = null, action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.notes.newNoteId;
    default:
      return state;
  };
};

const ex = {
  1: {
    id: 1,
    title: 'note1',
    labels: [1, 2],
    body: 'supernote',
    createdAt: 121,
    updateAt: 234
  },
  2: {
    id: 2,
    title: 'note2',
    labels: [1],
    body: 'simple note',
    createdAt: 145,
    updateAt: 156
  },
  3: {
    id: 3,
    title: 'note3',
    labels: [2],
    body: 'supersimple note',
    createdAt: 212,
    updateAt: 212
  }
}

const byId = (state = ex, action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.notes.byId;
    default:
      return state;
  };
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.notes.allIds;
    default:
      return state;
  };
};

const updateAt = (state = null, action) => {
  switch (action.type) {
    case 'options/success':
      return action.payload.notes.updateAt;
    default:
      return state;
  };
};

const notes = combineReducers({
  newNoteId,
  byId,
  allIds,
  updateAt
});

export default notes;