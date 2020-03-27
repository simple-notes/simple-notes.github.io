import { createSelector } from 'reselect';

const sortNotes = (notes, sortType) => {
  switch (sortType) {
    case "byCreateDateAscending":
    default:
      return notes.sort((a, b) => a.createdAt - b.createdAt);
  };
};

const selectSort = (state, props) => props.query.sort;
const selectFilter = (state, props) => props.query.filter;
const selectLabels = (state, props) => props.query.labels;
const selectNotesList = (state) => Object.values(state.notes.byId);

export const selectNotes = createSelector(
  [selectNotesList, selectSort, selectFilter],
  (notesList, sort, filter) => {
    return sortNotes(notesList, sort)
      .filter(note => {
        return filter
          ? note.body.match(new RegExp("^" + filter))
          : true;
      });
  }
);
