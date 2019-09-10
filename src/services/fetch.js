import { debounce } from 'lodash';

const notes = [{
  id: '1',
  title: 'First note',
  namespaces: ['first', 'second'],
  body: 'text'
}, {
  id: '2',
  title: 'Second note',
  namespaces: ['first'],
  body: 'text text'
}];

export const fetchNotes = (query) => {
  return new Promise(resolve => {
    const filtered = notes.filter(note => {
      const { title } = note;
      return title.toLowerCase().includes(query);
    });
    setTimeout(() => resolve(filtered), 1000);
  });
};

export const debounceEvent = (...args) => {
  const debouncedEvent = debounce(...args);
  return event => {
    event.persist();
    return debouncedEvent(event);
  };
};
