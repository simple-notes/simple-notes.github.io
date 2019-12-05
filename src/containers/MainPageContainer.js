import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { getNotesData, deleteNoteData } from '../services/library';
import { debounceEvent } from '../services/events';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { NotesContext } from './NotesContext';
import MainPage from '../components/MainPage';

const MainPageContainer = ({ width }) => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const { query, handleQuery, openEditor } = useContext(NotesContext);

  useEffect(() => {
    debounceEvent(setNotes)(getNotesData(query, selectedIds));
  }, [query, selectedIds]);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const deleteNote = (id) => async () => {
    await deleteNoteData(id);
    setNotes(getNotesData(query, selectedIds));
  };

  return (
    <MainPage
      notes={notes}
      desktop={isWidthUp("sm", width)}
      open={open}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      toggleDrawer={toggleDrawer}
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

export default withWidth()(MainPageContainer);
