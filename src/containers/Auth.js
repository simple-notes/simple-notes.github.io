import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { parseHash } from '../services/auth';
import { initApp, changeOnlineStatus } from '../actions/app';
//import { ConfirmProvider } from './ConfirmContext';
import Loading from '../components/Loading';
//import NotesContainer from './NotesContainer';
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import useMediaQuery from '@material-ui/core/useMediaQuery';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';


const Auth = () => {
  const hash = window.location.hash;
  parseHash(hash);
  
  return (
    <></>
  );
  //parseHash(hash);
};

export default Auth;
