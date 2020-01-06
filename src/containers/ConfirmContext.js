import React, { useState, createContext } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';

const ConfirmContext = createContext(null);

export const ConfirmLocales = {
  Default: {
    title: "Confirm action",
    text: "",
    cancelBtnText: "Cancel",
    mainBtnText: "Confirm",
    secondBtnText: "Do additional action"
  },
  DeleteNote: {
    title: "Deleting note",
    text: "Do you really want to delete note?",
    mainBtnText: "Delete"
  },
  EmptyNote: {
    title: "Empty note",
    text: "You can't add note without title"
  },
  CloseWithoutSaving: {
    title: "Close unsaved note",
    text: "Do you really want to close note without saving? All changes will be discarded.",
    cancelBtnText: "Cancel",
    mainBtnText: "Confirm",
    secondBtnText: "Save and close"
  }
};

export const ConfirmProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState(ConfirmLocales.Default);
  const [mainFunc, setMainFunc] = useState(null);
  const [secondFunc, setSecondFunc] = useState(null);

  const openConfirmForm = (customLocale, main, second) => {
    if (customLocale) {
      setLocale({ ...locale, ...customLocale });
    };
    if (main) {
      setMainFunc(() => main);
    };
    if (second) {
      setSecondFunc(() => second);
    };
    setOpen(true);
  };

  const cancelAction = () => {
    setOpen(false);
    setMainFunc(null);
    setSecondFunc(null);
    setLocale(ConfirmLocales.Default);
  };

  const mainAction = () => {
    mainFunc();
    cancelAction();
  };

  const secondAction = () => {
    secondFunc();
    mainAction();
  };

  return (
    <ConfirmContext.Provider
      value={{
        openConfirmForm
      }}
    >
      {children}
      <ConfirmDialog
        open={open}
        locale={locale}
        cancelAction={cancelAction}
        mainAction={mainFunc ? mainAction : null}
        secondAction={secondFunc ? secondAction : null}
      />
    </ConfirmContext.Provider>
  );
}

export default ConfirmContext;
