import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../components/Main';
import LibraryContainer from '../containers/LibraryContainer';
import SignIn from '../containers/SignIn';
import { connect } from 'react-redux';

function App({ error }) {
  return error
    ? (<div>{error}</div>)
    : (
      <Main>
        <Switch>
          <Route path={"/notes"} component={LibraryContainer} />
          <Route path={"/signin"} component={SignIn} />
          <Redirect to="/notes" />
        </Switch>
      </Main>
    );
};

const mapStateToProps = store => {
  const { appdata: { error, isInited } } = store;
  return { error, isInited };
};

export default connect(mapStateToProps)(App);
