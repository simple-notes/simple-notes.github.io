import React, { useState, useEffect, createContext } from 'react';
import { parseHash } from '../services/auth';
import { initApp } from '../services/notes';
import { ConfirmProvider } from './ConfirmContext';
import Loading from '../components/Loading';
import NotesContainer from './NotesContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';

const AppContext = createContext(null);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const desktop = useMediaQuery('(min-width:600px)');

  useEffect(() => {
    const init = async () => {
      try {
        const hash = window.location.hash;
        if (hash) {
          parseHash(hash);
        } else {
          await initApp();
        };
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      };
    };
    init();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppContext.Provider
        value={{
          isLoading,
          setIsLoading,
          error,
          setError,
          desktop
        }}
      >
        <ConfirmProvider>
          {
            isLoading
              ? <Loading />
              : <NotesContainer />
          }
        </ConfirmProvider>
      </AppContext.Provider>
    </>
  )
};

export { AppContext, App };
