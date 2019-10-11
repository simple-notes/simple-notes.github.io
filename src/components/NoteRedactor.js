import React from 'react';
import PropTypes from 'prop-types';

function NoteRedactor({ handleChange }) {
  return (
    <form>
      <input type="text" />
      <textarea rows="10" cols="30" />
      <input type="button" value="Add note" onClick={handleChange} />
    </form>
  );
};

NoteRedactor.propTypes = {
  handleChange: PropTypes.func
};

export default NoteRedactor;
