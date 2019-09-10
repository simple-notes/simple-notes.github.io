import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import NoteListContainer from '../containers/NoteListContainer';

function Library() {
  return (
    <div>
      <header>
        <SearchContainer />
      </header>
      <div>
        <NoteListContainer />
      </div>
    </div>
    );
};

export default Library;
