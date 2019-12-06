import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import { getNotesData, deleteNoteData } from '../services/library';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Notes from '../components/Notes';

const NotesContainer = () => {
  const desktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const [filtersDrawer, setFiltersDrawer] = useState(desktop);
  const [labelsDrawer, setLabelsDrawer] = useState(desktop);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState({ string: '', labelsIds: [] });
  const [notes, setNotes] = useState([]);
  const [editedNote, setEditedNote] = useState(null);

  useEffect(() => {
    setNotes(getNotesData(query));
  }, [query]);

  const toggleFiltersDrawer = () => {
    setFiltersDrawer(!filtersDrawer);
  };

  const editNote = (note) => () => {
    setEditedNote(note);
    setEdit(true);
  };

  const editNewNote = () => {
    setEditedNote({
      labelsIds: [],
      title: '',
      text: ''
    });
    setEdit(true);
  };

  const createNote = async () => {
    await createNoteData(editedNote);
    setEditedNote(null);
    setLabels(getLabelsData());
  };

  const updateNote = async () => {
    await updateNoteData(editedNote);
    setNotes(getNotesData());
  };

  const deleteNote = (id) => async () => {
    await deleteNoteData(id);
    setNotes(getNotesData(query, selectedIds));
  };

  return (
    <MainPage
      notes={notes}
      desktop={desktop}
      open={filtersDrawer}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      toggleDrawer={toggleFiltersDrawer}
      query={query}
      handleQuery={handleQuery}
      openEditor={openEditor}
      deleteNote={deleteNote}
    />
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
