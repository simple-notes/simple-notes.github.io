import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import NoteListContainer from '../containers/NoteListContainer';
import NamespaceListContainer from '../containers/NamespaceListContainer';

function Library() {
  return (
    <div>
      <header>
        <SearchContainer />
        <NamespaceListContainer />
      </header>
      <div>
        <NoteListContainer />
      </div>
    </div>
  );
};

export default Library;
