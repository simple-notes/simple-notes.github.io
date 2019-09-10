import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const { handleChange } = props;
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func
};

export default Search;
