import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { children } = props;
  return (
    <main>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
