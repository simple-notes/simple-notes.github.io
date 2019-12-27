import React from 'react';
//import PropTypes from 'prop-types';
import Confirm from '../components/Confirm';

export const DialogTypes = {
  Default: {
    title: "Confirm action",
    text: "Are you sure?",
    btnText: "Confirm"
  },
  DeleteNote: {
    title: "Deleting note",
    text: "Do you really want to delete note?",
    btnText: "Delete"
  },
  EmptyNote: {
    title: "Empty note",
    text: "You can't add note without title",
    btnText: "Ok",
    hideCancelBtn: true
  },
  CloseWithoutSaving: {
    title: "Note saving",
    text: "Do you really want to close note without saving? All changes will be discarded.",
    btnText: "Close without saving"
  }
};

const ConfirmContainer = ({
  open,
  setOpen,
  type = DialogTypes.Default,
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
      title={type.title}
      text={type.text}
      btnText={type.btnText}
      cancelAction={cancelAction}
      submitAction={submitAction}
      hideCancelBtn={type.hideCancelBtn}
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
