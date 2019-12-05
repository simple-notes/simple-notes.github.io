import React, { useState, useContext } from 'react';
//import PropTypes from 'prop-types';
import { createNoteData, updateNoteData } from '../services/library';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { AppContext } from './App';
import { NotesContext } from './NotesContext';
import { Editor } from '../components/Editor';

const EditorPageContainer = ({ width }) => {
  const { openMain } = useContext(AppContext);
  const { note, setNote } = useContext(NotesContext);

  const [open, setOpen] = useState(true);
  const [noteData, setNoteData] = useState(note || {
    labelsIds: [],
    title: '',
    text: ''
  });

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const closeEditor = () => {
    openMain();
    setNote(null);
  };

  const saveNote = async (event) => {
    event.preventDefault();
    if (!note) {
      await createNoteData(noteData);
    } else {
      await updateNoteData(noteData);
    };
    closeEditor();
  };

  const setLabels = (labelsIds) => {
    setNoteData({ ...noteData, labelsIds: labelsIds });
  };

  const changeField = ({ target: { name, value } }) => {
    setNoteData({ ...noteData, [name]: value });
  };

  return (
    <Editor
      desktop={isWidthUp("sm", width)}
      open={open}
      toggleDrawer={toggleDrawer}
      note={noteData}
      saveNote={saveNote}
      changeField={changeField}
      closeEditor={closeEditor}
      setLabels={setLabels}
    />
  );
};

/*EditorContainer.propTypes = {
  noteList: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  })
};*/

export default withWidth()(EditorPageContainer);
