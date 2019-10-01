import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../components/Main';
import Library from '../components/Library';
import SignIn from '../containers/SignIn';
import { connect } from 'react-redux';
import { initAppdata } from '../actions/appdata';
import { getNamespaces } from '../actions/namespaces';

function App({ error, initAppdata }) {

  useEffect(() => {
    initAppdata();
  });

  return (
    <>
      <div>{error}</div>
      <Main>
        <Switch>
          <Route path={"/notes"} component={Library} />
          <Route path={"/signin"} component={SignIn} />
          <Redirect to="/notes" />
        </Switch>
      </Main>
    </>
  );
};

const mapStateToProps = store => {
  const { appdata: { error } } = store;
  return { error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initAppdata: async () => {
      await dispatch(initAppdata());
      dispatch(getNamespaces());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
