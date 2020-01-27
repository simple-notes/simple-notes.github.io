import React, { useState, useEffect, createContext } from 'react';
import { parseHash } from '../services/auth';
import { initApp } from '../services/notes';
import { ConfirmProvider } from './ConfirmContext';
import Loading from '../components/Loading';
import NotesContainer from './NotesContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';

const AppContext = createContext(null);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const desktop = useMediaQuery('(min-width:768px)');

  const breakpointValues = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  )
};

export { AppContext, App };
