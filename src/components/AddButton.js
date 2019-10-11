import React from 'react';
import PropTypes from 'prop-types';

function AddButton({ handleClick }) {
  return (
    <div onClick={handleClick}>
      Text
    </div>
  );
};

AddButton.propTypes = {
  handleClick: PropTypes.func
};

export default AddButton;
