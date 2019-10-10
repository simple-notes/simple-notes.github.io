import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import NoteListContainer from '../containers/NoteListContainer';
import AddButtonContainer from '../containers/AddButtonContainer';
import NamespaceListContainer from '../containers/NamespaceListContainer';

function Library() {
  return (
    <div>
      <header>
        <SearchContainer />
        <NamespaceListContainer />
        <AddButtonContainer />
      </header>
      <div>
        <NoteListContainer />
      </div>
    </div>
  );
};

export default Library;
