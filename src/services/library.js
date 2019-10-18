import { getFiles, createFile, createFiles, updateFiles, removeAllData } from './drive';
import { MIN_WORD_LENGTH } from '../config';

let namespaces;
let substrings;
let previews;
let options;

const getNewNoteId = () => {
  const { currentNoteId } = options;
  return currentNoteId + 1;
};

const getNewNamespaceId = () => {
  const { currentNamespaceId } = options;
  return currentNamespaceId + 1;
};

export const initLibrary = async () => {
  //await test();
  [namespaces, substrings, previews, options] = await getFiles(['namespaces', 'substrings', 'previews', 'options']);
};

const intersection = (setA, setB) => {
  if (setB.length < setA.length) {
    [setA, setB] = [setB, setA];
  };
  return setA.filter(item => setB.includes(item));
};

export const createNote = async (note) => {
  const { namespaces: namespaceIds, title, body } = note;
  const id = getNewNoteId();
  options.currentNoteId = id;
  indexText(id, title);
  indexText(id, body);
  indexNamespaces(id, namespaceIds);
  createFilePreview(id, note);
  await createFile(id.toString(), note);
  await updateFiles([
    { name: 'namespaces', data: namespaces },
    { name: 'substrings', data: substrings },
    { name: 'previews', data: previews },
    { name: 'options', data: options }
  ]);
};

const createFilePreview = (id, note) => {
  const { namespaces, title, body } = note;
  previews[id] = {
    id,
    namespaces,
    title,
    body: body.slice(0, 100)
  };
};

const parseTextToWords = (text) => {
  const regex = new RegExp(`\\b[a-z]{${MIN_WORD_LENGTH},}\\b`, 'g');
  return text.toLowerCase().match(regex) || [];
};

const indexText = (noteId, text) => {
  parseTextToWords(text).forEach(word => {
    for (let i = 0; i <= word.length - MIN_WORD_LENGTH; i++) {
      for (let j = word.length; j >= i + MIN_WORD_LENGTH; j--) {
        const wordPart = word.slice(i, j);
        if (!substrings[wordPart]) {
          substrings[wordPart] = [noteId]
        } else {
          if (!substrings[wordPart].includes(noteId)) {
            substrings[wordPart].push(noteId);
          };
        };
      };
    };
  });
};

const indexNamespaces = (noteId, namespaceIds) => {
  namespaceIds.forEach(id => namespaces[id].notes.push(noteId));
};

export const createNamespace = async (namespaceName) => {
  const id = getNewNamespaceId();
  options.currentNamespaceId = id;
  namespaces[id] = {
    id: id,
    name: namespaceName,
    notes: []
  };
  await updateFiles([
    { name: 'namespaces', data: namespaces },
    { name: 'options', data: options }
  ]);
};

export const getNamespaces = (namespaceIds) => {
  return namespaceIds
    ? namespaceIds.map(id => namespaces[id]) 
    : Object.values(namespaces);
};

export const getNotesByParams = (query) => {
  return getNotesIndexes(query).map(id => previews[id]);
};

const getNotesIndexes = ({ string, namespaces }) => {
  if (!string) {
    if (!namespaces.length) {
      return [];
    };
    return getIndexesByNamespaces(namespaces);
  };
  let indexes = getIndexesByString(string);
  if (indexes.length === 0 || !namespaces.length) {
    return indexes;
  };
  return intersection(indexes, getIndexesByNamespaces(namespaces));
};

const getIndexesByString = (string) => {
  const words = parseTextToWords(string);
  if (words.length === 0) {
    return [];
  };
  if (words.length === 1) {
    return substrings[words[0]] || [];
  };
  return words
    .map(word => substrings[word] || [])
    .reduce((previous, current) => intersection(previous, current));
};

const getIndexesByNamespaces = (namespaceIds) => {
  if (namespaceIds.length === 1) {
    return namespaces[namespaceIds[0]].notes;
  };
  return namespaceIds
    .map(id => namespaces[id].notes)
    .reduce((previous, current) => intersection(previous, current));
};

//---------------------for tests and debugging----------------------

const test = async () => {
  await removeAllData();
  await createFiles([
    { name: 'namespaces', data: {} },
    { name: 'substrings', data: {} },
    { name: 'previews', data: {} },
    { name: 'options', data: { currentNoteId: 0, currentNamespaceId: 0 } }
  ]);
  [namespaces, substrings, previews, options] = await getFiles(['namespaces', 'substrings', 'previews', 'options']);
  await createNamespace('green');
  await createNamespace('blue');
  await createNamespace('red');
  await createNote({
    namespaces: [1, 2],
    title: 'Anything',
    body: 'Text about anything'
  });
  await createNote({
    namespaces: [1, 3],
    title: 'Nothing',
    body: 'Text about nothing'
  });
  await createNote({
    namespaces: [3],
    title: 'Simple text',
    body: 'Paragraph about nothing and anything'
  });
};
