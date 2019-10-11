import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { parseHash } from '../services/auth';

function SignIn({ location: { hash } }) {
  parseHash(hash);

  return (
    <Redirect to="/notes" />
  );
};

export default withRouter(SignIn);
