import React, { useState, useEffect,useContext } from 'react';
//import PropTypes from 'prop-types';
import { AppContext } from '../containers/App';
import Editor from '../components/Editor';

const EditorContainer = ({ note, saveNote, closeEditor }) => {
  const { desktop } = useContext(AppContext);
  const [drawer, setDrawer] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  useEffect(() => {
    setEditedNote(note);
  }, [note]);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const setLabelsIds = (labelsIds) => {
    setEditedNote({ ...editedNote, labelsIds: labelsIds });
  };

  const changeField = ({ target: { name, value } }) => {
    setEditedNote({ ...editedNote, [name]: value });
  };

  const closeNote = () => {
    closeEditor();
  };

  return (
    <Editor
      desktop={desktop}
      drawer={drawer}
      toggleDrawer={toggleDrawer}
      note={editedNote}
      changeField={changeField}
      setLabelsIds={setLabelsIds}
      saveNote={saveNote(editedNote)}
      closeNote={closeNote}
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
