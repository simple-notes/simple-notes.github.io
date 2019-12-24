import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { AppContext } from '../containers/App';
import Editor from '../components/Editor';
import { DialogTypes } from './ConfirmContainer';

const EditorContainer = ({ note, saveNote, closeEditor }) => {
  const { desktop } = useContext(AppContext);
  const [drawer, setDrawer] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  const [showRendered, setShowRendered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [onDialogConfirm, setOnDialogConfirm] = useState();
  const [dialogType, setDialogType] = useState();
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
    if (saveNeed === true) {
      setDialogType(DialogTypes.CloseWithoutSaving);
      setOnDialogConfirm(() => closeEditor);
      setDialogOpen(true);
    } else {
      closeEditor();
    }
  };

  const changeRenderedMode = () => {
    setShowRendered(!showRendered);
  }

  const onSaveNote = () => {
    if (!editedNote.title) {
      setDialogType(DialogTypes.EmptyNote);
      setOnDialogConfirm(() => () => {});
      setDialogOpen(true);
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
      dialogOpen={dialogOpen}
      onDialogConfirm={onDialogConfirm}
      setDialogOpen={setDialogOpen}
      dialogType={dialogType}
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
