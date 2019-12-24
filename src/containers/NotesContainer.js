import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { getNotesData, createNoteData, updateNoteData, deleteNoteData } from '../services/notes';
import { AppContext } from '../containers/App';
import Notes from '../components/Notes';
import EditorContainer from './EditorContainer';
import ConfirmDialog from '../components/ConfirmDialog';

const NotesContainer = () => {
  const { desktop } = useContext(AppContext);
  const [drawer, setDrawer] = useState(desktop);
  const [query, setQuery] = useState({ string: '', labelsIds: [] });
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteNoteFunction, setDeleteNoteFunction] = useState();

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
    setDialogOpen(true);

    const deleteNoteFunction = () => {
      deleteNoteData(id);
      setNotes(getNotesData(query));
    }

    setDeleteNoteFunction(() => deleteNoteFunction);
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
        <>
          <Notes
            desktop={desktop}
            drawer={drawer}
            toggleDrawer={toggleDrawer}
            notes={notes}
            query={query}
            changeQueryString={changeQueryString}
            setQueryLabelsIds={setQueryLabelsIds}
            openEditor={openEditor}
            deleteNote={deleteNote}
          />

          <ConfirmDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)} 
            onConfirm={deleteNoteFunction}
            dialogContent="Do you really want to delete this note?"
          />
        </>
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
