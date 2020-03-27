//import { getTokenData, login, logout, loggedIn } from '../services/auth';

const fetchingNotes = () => {
  return {
    type: 'notes/fetching'
  };
};

const notesSuccess = (notesList) => {
  return {
    type: 'notes/success',
    payload: notesList
  };
};

const notesFailure = (error) => {
  return {
    type: 'notes/failure',
    error: 'Failed to fetch notes',
    payload: error
  };
};

export const fetchNotes = async () => {
  return (dispatch) => {
    dispatch(fetchingNotes());
    try{
      const notes = await services.fetchNotes();
      dispatch(notesSuccess(notes));
    } catch(error) {
      dispatch(notesFailure(error));
    };
  };
};

export const createNote = (note) => {
  return {
    type: 'notes/create',
    payload: {
      note: note,
      date: Date.now()
    }
  };
};

export const changeNote = (note) => {
  return {
    type: 'notes/change',
    payload: {
      note: note,
      date: Date.now()
    }
  };
};

export const saveNote = (note) => {
  return {
    type: 'notes/save',
    payload: {
      note: note,
      date: Date.now()
    }
  };
};

export const deleteNote = (noteId) => {
  return {
    type: 'notes/delete',
    payload: {
      noteId: noteId,
      date: Date.now()
    }
  };
};
