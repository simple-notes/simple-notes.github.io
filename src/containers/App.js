import React, { useState, useEffect, createContext } from 'react';
import { parseHash } from '../services/auth';
import { initDrive } from '../services/drive';
import { initLibrary } from '../services/library';
import { NotesProvider } from '../containers/NotesContext';
import { SearchContainer } from '../containers/SearchContainer';
import { NotesContainer } from '../containers/NotesContainer';
import { PageLayout } from '../components/PageLayout';

const AppContext = createContext(null);

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInited, setIsInited] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const initApp = async () => {
      try {
        setIsLoading(true);
        const hash = window.location.hash;
        if (hash) {
          parseHash(hash);
        } else {
          await initDrive();
          await initLibrary();
        };
        setIsInited(true);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      };
    };
    initApp();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isInited,
        setIsLoading,
        setError,
      }}
    >
      <NotesProvider>
        <PageLayout
          header={<SearchContainer />}
          body={<NotesContainer />}
        />
      </NotesProvider>
      <hr />
      {error && <div>{error}</div>}
      {isLoading && <div>{'Loading...'}</div>}
      {isInited && <div>{'App is inited'}</div>}
    </AppContext.Provider>
  )
};

export { App, AppContext };