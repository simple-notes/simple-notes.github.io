import React from 'react';
import { Redirect } from 'react-router-dom';
import { saveHash } from '../services/auth';

function SignIn(props) {
  const { location: { hash } } = props;

  if (hash) {
    saveHash(hash);
  };

  return (
    <Redirect to="/notes" />
  );
};

export default SignIn;
