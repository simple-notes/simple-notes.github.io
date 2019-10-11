import React, { useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Library from '../components/Library';
import NoteRedactor from '../components/NoteRedactor';
import { connect } from 'react-redux';
import { initAppdata } from '../actions/appdata';
import { getNamespaces } from '../actions/namespaces';

function LibraryContainer({ isInited, initAppdata, match: { path } }) {
  useEffect(() => {
    if (!isInited) {
      initAppdata();
    };
  }, [initAppdata, isInited]);

  if (isInited) {
    return (
      <Switch>
        <Route exact path={path} component={Library} />
        <Route exact path={`${path}/new`} component={NoteRedactor} />
        <Redirect to={path} />
      </Switch>
    );
  } else {
    return (
      <div>{'Isn\'t inited'}</div>
    );
  };
};

const mapStateToProps = store => {
  const { appdata: { isInited } } = store;
  return { isInited };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initAppdata: async () => {
      await dispatch(initAppdata());
      dispatch(getNamespaces());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LibraryContainer));
