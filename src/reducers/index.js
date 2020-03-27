import { combineReducers } from 'redux';
import app from './app';
import notes from './notes';
import labels from './labels';

export const rootReducer = combineReducers({
  app,
  notes,
  labels
});
