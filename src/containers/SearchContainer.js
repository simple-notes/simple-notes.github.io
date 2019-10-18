import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import { NotesContext } from '../containers/NotesContext';
import { NamespacesContainer } from '../containers/NamespacesContainer';
import { SearchBar } from '../components/SearchBar';

const SearchContainer = () => {
  const { filter, setFilter, isEditorOpen } = useContext(NotesContext);

  if (isEditorOpen) {
    return null;
  };

  const { string, namespaces } = filter;

  const changeString = ({ target: { value } }) => {
    setFilter({ ...filter, string: value });
  };

  const selectNamespace = (targetId) => {
    let newNamespaces;
    if (namespaces.includes(targetId)) {
      newNamespaces = namespaces.filter(id => id !== targetId);
    } else {
      newNamespaces = [...namespaces];
      newNamespaces.push(targetId);
    };
    setFilter({ ...filter, namespaces: newNamespaces });
  };

  return (
    <>
      <SearchBar
        string={string}
        changeString={changeString}
      />
      <NamespacesContainer
        selected={namespaces}
        select={selectNamespace}
      />
    </>
  );
};

/*SearchContainer.propTypes = {
  noteList: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    namespaces: PropTypes.arrayOf(PropTypes.string)
  })
};*/

export { SearchContainer };
