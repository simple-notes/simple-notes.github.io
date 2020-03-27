import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { parseHash } from '../services/auth';
import { initApp, changeOnlineStatus } from '../actions/app';
//import { ConfirmProvider } from './ConfirmContext';
import Loading from '../components/Loading';
//import NotesContainer from './NotesContainer';
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import Auth from './Auth';
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect } from 'react-router-dom';

/*
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const desktop = useMediaQuery('(min-width:768px)');
  
  const theme = createMuiTheme({ 
    breakpoints: { 
      values: {
        xs: 0,
        sm: 576,
        md: 768, 
        lg: 992,
        xl: 1200,
      }
    },
    palette: {
      primary: {
        main: "#1565c0"
      }
    },
  });

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
};*/

/*
const App = (props) => {
  const { isOnline, isFetching, isLoaded, initApp, changeOnlineStatus } = props;

  useEffect(() => {
    changeOnlineStatus(window.navigator.onLine);
    window.addEventListener('offline', () => changeOnlineStatus(false));
    window.addEventListener('online', () => changeOnlineStatus(true));
  }, [changeOnlineStatus]);

  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash) {
        parseHash(hash);
      } else {
        initApp();
      };
    } catch (err) {
      console.log(err.message || 'Unknown error');
    };
  }, [initApp]);

  return (
    <>
      {`Online status: ${isOnline}`}
      <br />
      <CssBaseline />
      {isFetching && <Loading />}
    </>
  )
};

const mapStateToProps = (state) => ({
  isOnline: state.app.isOnline,
  isFetching: state.app.isFetching,
  isLoaded: state.app.isLoaded,
});

const mapDispatchToProps = { initApp, changeOnlineStatus };

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

const App = () => {
  return (
    <Switch>
      <Route path="/auth" children={<Auth />} />
      <Route path="*" children={<Main />} />
    </Switch>
  )
};

export default App;
