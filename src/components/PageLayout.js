import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = ({ header, body }) => {
  return (
    <>
      <header>
        {header}
      </header>
      <main>
        {body}
      </main>
    </>
  );
};

PageLayout.propTypes = {
  header: PropTypes.element,
  body: PropTypes.element
};

export { PageLayout };
