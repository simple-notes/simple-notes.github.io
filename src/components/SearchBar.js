import React from 'react';
//import PropTypes from 'prop-types';

const SearchBar = ({ string, changeString }) => {
  return (
    <div>
      <input
        type="text"
        value={string}
        onChange={changeString}
      />
    </div>
  );
};

/*SearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};*/

export { SearchBar };
