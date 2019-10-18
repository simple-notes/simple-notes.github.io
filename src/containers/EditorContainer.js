import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { createNote } from '../services/library';
import { Editor } from '../components/Editor';

const EditorContainer = ({ note, closeEditor }) => {
  const [noteData, setNoteData] = useState(note || {
    namespaces: [],
    title: '',
    body: ''
  });

  const saveNote = async (event) => {
    event.preventDefault();
    if (!note) {
      await createNote(noteData);
    } else {
      //await updateNote(noteData);
    };
    closeEditor();
  };

  const changeField = ({ target: { name, value } }) => {
    setNoteData({ ...noteData, [name]: value });
  };

  return (
    <Editor
      note={noteData}
      saveNote={saveNote}
      changeField={changeField}
      closeEditor={closeEditor}
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

export { EditorContainer };
