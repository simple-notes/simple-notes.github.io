import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../components/Main';
import Library from '../components/Library';

function App() {
  return (
    <Main>
      <Switch>
        <Route path={"/notes"} component={Library} />
        <Redirect to="/notes" />
      </Switch>
    </Main>
  );
};

export default App;
