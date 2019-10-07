import React from 'react';
import { Redirect } from 'react-router-dom';
import { parseHash } from '../services/auth';

function SignIn(props) {
  const { location: { hash } } = props;

  if (hash) {
    parseHash(hash);
  };

  return (
    <Redirect to="/notes" />
  );
};

export default SignIn;
