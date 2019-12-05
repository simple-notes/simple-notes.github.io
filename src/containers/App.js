import React, { useState, useEffect, createContext } from 'react';
import { parseHash } from '../services/auth';
import { initLibrary } from '../services/library';
import { NotesProvider } from './NotesContext';
import MainPageContainer from './MainPageContainer';
import EditorPageContainer from './EditorPageContainer';
import CssBaseline from '@material-ui/core/CssBaseline';

const AppContext = createContext(null);

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState('init');

  const openMain = () => {
    setPage('main');
  };

  const openEditor = () => {
    setPage('editor');
  };

  useEffect(() => {
    const initApp = async () => {
      try {
        setIsLoading(true);
        const hash = window.location.hash;
        if (hash) {
          parseHash(hash);
        } else {
          await initLibrary();
        };
        setPage('main');
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      };
    };
    initApp();
  }, []);

  const getPageComponent = () => {
    switch (page) {
      case 'main':
        return <MainPageContainer />;
      case 'editor':
        return <EditorPageContainer />;
      case 'init':
        break;
      default:
        setError('Unknown component');
    };
  };

  return (
    <>
      <CssBaseline />
      <AppContext.Provider
        value={{
          isLoading,
          setIsLoading,
          error,
          setError,
          openMain,
          openEditor
        }}
      >
        <NotesProvider>
          {getPageComponent()}
        </NotesProvider>
      </AppContext.Provider>
    </>
  )
};

export { AppContext, App };
