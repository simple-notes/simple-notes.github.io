import React from 'react';
//import PropTypes from 'prop-types';

const NoteListItem = ({ note: { title, body }, openEditor }) => {
  return (
    <li>
      <div onClick={openEditor}>
        <h3>{title}</h3>
        <b>{body}</b>
      </div>
    </li>
  );
};

/*NoteListItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};*/

export { NoteListItem };
