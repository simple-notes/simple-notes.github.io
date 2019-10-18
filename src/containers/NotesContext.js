import React, { useState, createContext } from 'react';

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [filter, setFilter] = useState({
    string: '',
    namespaces: []
  });

  return (
    <NotesContext.Provider
      value={{
        isEditorOpen,
        setIsEditorOpen,
        filter,
        setFilter
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
