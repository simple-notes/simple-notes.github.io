import React from 'react';
//import PropTypes from 'prop-types';
import Confirm from '../components/Confirm';

const ConfirmContainer = ({
  open,
  setOpen,
  title,
  text,
  btnText,
  action
}) => {

  const cancelAction = () => {
    setOpen(false);
  };

  const submitAction = () => {
    action();
    setOpen(false);
  };

  return (
    <Confirm
      open={open}
      title={title}
      text={text}
      btnText={btnText}
      cancelAction={cancelAction}
      submitAction={submitAction}
    />
  );
};

/*EditorContainer.propTypes = {
  noteList: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  })
};*/

export default ConfirmContainer;
