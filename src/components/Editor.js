import React from 'react';
//import PropTypes from 'prop-types';

const Editor = ({ note: { title, body }, saveNote, changeField, closeEditor }) => {
  return (
    <div>
      <div
        onClick={closeEditor}
      >
        Close editor
      </div>
      <form
        onSubmit={saveNote}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={changeField}
        />
        <textarea
          name="body"
          value={body}
          onChange={changeField}
        />
        <input
          type="submit"
          value="Submit note" />
      </form>
    </div>
  );
};

/*Editor.propTypes = {
  handleChange: PropTypes.func
};*/

export { Editor };
