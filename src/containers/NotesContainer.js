import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { getNotesData, createNoteData, updateNoteData, deleteNoteData } from '../services/notes';
import { AppContext } from '../containers/App';
import ConfirmContext, { ConfirmLocales } from './ConfirmContext';
import Notes from '../components/Notes';
import EditorContainer from './EditorContainer';

const NotesContainer = () => {
  const { desktop } = useContext(AppContext);
  const { openConfirmForm } = useContext(ConfirmContext);
  const [drawer, setDrawer] = useState(desktop);
  const [query, setQuery] = useState({ string: '', labelsIds: [] });
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [deleteFunc, setDeleteFunc] = useState();

  useEffect(() => {
    setNotes(getNotesData(query));
  }, [query]);

  useEffect(() => {
    setDrawer(desktop);
  }, [desktop]);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const changeQueryString = ({ target: { value } }) => {
    setQuery({ ...query, string: value });
  };

  const setQueryLabelsIds = (checkedIds) => {
    setQuery({ ...query, labelsIds: checkedIds });
  };

  const openEditor = (note) => () => {
    note = note || {
      labelsIds: [],
      title: '',
      text: ''
    };
    setNote(note);
  };

  const closeEditor = () => {
    setNote(null);
  };

  const saveNote = (editedNote) => () => {
    let newNoteData;
    if (editedNote.id) {
      newNoteData = updateNoteData(editedNote);
    } else {
      newNoteData = createNoteData(editedNote);
    };
    setNote(newNoteData);
    setNotes(getNotesData(query));
  };

  const deleteNote = (id) => () => {
    deleteNoteData(id);
    setNotes(getNotesData(query));
  };

  const confirmDeleteNote = (id) => () => {
    openConfirmForm(ConfirmLocales.DeleteNote, deleteNote(id));
  };

  return (
    note
      ? (
        <EditorContainer
          note={note}
          saveNote={saveNote}
          closeEditor={closeEditor}
        />
      )
      : (
        <Notes
          desktop={desktop}
          drawer={drawer}
          toggleDrawer={toggleDrawer}
          notes={notes}
          query={query}
          changeQueryString={changeQueryString}
          setQueryLabelsIds={setQueryLabelsIds}
          openEditor={openEditor}
          deleteNote={confirmDeleteNote}
        />
      )
  );
};

/*SearchContainer.propTypes = {
  noteList: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  })
};*/

export default NotesContainer;
