import React from 'react';
import PropTypes from 'prop-types';

function NoteList(props) {
  const { isFetching, notes } = props;
  if (isFetching) {
    return (
      <p>{'Loading...'}</p>
    );
  };
  return (
    <div>
      <ul>
        {
          notes.map(note => {
            const { id, title, body } = note;
            return (
              <li key={id}>
                <div>
                  <h3>{title}</h3>
                  <b>{body}</b>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

NoteList.propTypes = {
  isFetching: PropTypes.bool,
  notes: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  }))
};

export default NoteList;
