import React, { useState, useEffect, useContext } from 'react';
//import PropTypes from 'prop-types';
import { getNamespaces } from '../services/library';
import { AppContext } from '../containers/App';

const NamespacesContainer = ({ selected, select, ids }) => {
  const { isInited } = useContext(AppContext);

  const [namespaces, setNamespaces] = useState([]);

  useEffect(() => {
    if (isInited) {
      setNamespaces(getNamespaces(ids));
    };
  }, [isInited, ids]);

  return (
    namespaces.map(({ id, name }) => {
      return (
        <div
          key={id}
          style={selected.includes(id) ? { color: "red" } : { color: "black" }}
          onClick={() => select(id)}
        >
          {name}
        </div>
      )
    })
  );
};

/*NamespacesContainer.propTypes = {
  noteList: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  })
};*/

export { NamespacesContainer };

