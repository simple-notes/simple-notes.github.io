import React, { useState, createContext, useContext } from 'react';
import { AppContext } from './App';

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [note, setNote] = useState(null);
  const [query, setQuery] = useState('');

  const { openEditor } = useContext(AppContext);

  const handleQuery = () => ({ target: { value } }) => {
    setQuery(value);
  };

  const editNote = (note) => () => {
    if (note) {
      setNote(note);
    };
    openEditor();
  };

  return (
    <NotesContext.Provider
      value={{
        note,
        setNote,
        query,
        handleQuery,
        openEditor: editNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
