import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({ children }) => {
  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  );
};

NoteList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export { NoteList };
