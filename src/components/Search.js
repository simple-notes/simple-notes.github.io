import React from 'react';

function Search(props) {
  const { handleChange } = props;

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;
