import React from 'react';

function NoteList({ isFetching, notes }) {
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

export default NoteList;
