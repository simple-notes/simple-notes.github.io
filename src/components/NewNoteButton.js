import React from 'react';
//import PropTypes from 'prop-types';

const NewNoteButton = ({ openNewNote }) => {
  return (
    <div onClick={openNewNote}>
      <span>Create new note</span>
    </div>
  );
};

/*AddNoteButton.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};*/

export { NewNoteButton };
