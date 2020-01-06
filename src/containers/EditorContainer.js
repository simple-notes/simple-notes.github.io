import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { AppContext } from './App';
import ConfirmContext, { ConfirmLocales } from './ConfirmContext';
import Editor from '../components/Editor';

const EditorContainer = ({ note, saveNote, closeEditor }) => {
  const { desktop } = useContext(AppContext);
  const { openConfirmForm } = useContext(ConfirmContext);
  const [drawer, setDrawer] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  const [showRendered, setShowRendered] = useState(false);
  const [saveNeed, setSaveNeed] = useState(false);

  useEffect(() => {
    setEditedNote(note);
  }, [note]);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const setLabelsIds = (labelsIds) => {
    setSaveNeed(true);
    setEditedNote({ ...editedNote, labelsIds: labelsIds });
  };

  const changeField = ({ target: { name, value } }) => {
    setSaveNeed(true);
    setEditedNote({ ...editedNote, [name]: value });
  };

  const closeNote = () => {
    if (saveNeed) {
      openConfirmForm(ConfirmLocales.CloseWithoutSaving, closeEditor, saveNote(editedNote));
    } else {
      closeEditor();
    };
  };

  const changeRenderedMode = () => {
    setShowRendered(!showRendered);
  };

  const onSaveNote = () => {
    if (!editedNote.title) {
      openConfirmForm(ConfirmLocales.EmptyNote);
    } else {
      saveNote(editedNote)();
      setSaveNeed(false);
    }
  }

  return (
    <Editor
      desktop={desktop}
      drawer={drawer}
      toggleDrawer={toggleDrawer}
      note={editedNote}
      changeField={changeField}
      setLabelsIds={setLabelsIds}
      saveNote={onSaveNote}
      closeNote={closeNote}
      showRendered={showRendered}
      changeRenderedMode={changeRenderedMode}
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

export default EditorContainer;
