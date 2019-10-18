import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { getNotesByParams } from '../services/library';
import { debounceEvent } from '../services/events';
import { NotesContext } from '../containers/NotesContext';
import { EditorContainer } from '../containers/EditorContainer';
import { NoteList } from '../components/NoteList';
import { NoteListItem } from '../components/NoteListItem';
import { NewNoteButton } from '../components/NewNoteButton';

const NotesContainer = () => {
  const { filter, isEditorOpen, setIsEditorOpen } = useContext(NotesContext);
  const [note, setNote] = useState(null);
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    debounceEvent(setNoteList)(getNotesByParams(filter))
  }, [filter]);

  const openEditor = (note) => {
    if (note) {
      setNote(note);
    };
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    if (note) {
      setNote(null);
    };
  };

  if (isEditorOpen) {
    return (
      <EditorContainer
        note={note}
        closeEditor={closeEditor}
      />
    );
  } else {
    return (
      <>
        <NoteList>
          {
            noteList.map(note => {
              const { id } = note;
              return (
                <NoteListItem
                  key={id}
                  note={note}
                  openEditor={() => openEditor(note)}
                />
              );
            })
          }
        </ NoteList>
        <NewNoteButton
          openNewNote={() => openEditor()}
        />
      </>
    );
  };
};

/*NotesContainer.propTypes = {
  noteList: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  }))
};*/

export { NotesContainer };
