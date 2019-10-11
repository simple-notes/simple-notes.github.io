import React from 'react';
import { withRouter } from 'react-router-dom';
import AddButton from '../components/AddButton';

function AddButtonContainer({ history, match: { path } }) {
  const handleClick = () => {
    history.push(`${path}/new`);
  };

  return (
    <AddButton
      handleClick={handleClick}
    />
  )
};

export default withRouter(AddButtonContainer);
