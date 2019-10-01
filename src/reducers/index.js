import { combineReducers } from 'redux';
import { notesReducer } from './notes';
import { namespacesReducer } from './namespaces';
import { appdataReducer } from './appdata';

export const rootReducer = combineReducers({
  notes: notesReducer,
  namespaces: namespacesReducer,
  appdata: appdataReducer
});
