import { getFiles, createFile, createFiles, updateFiles, removeAllData } from './drive';
import { MIN_WORD_LENGTH } from '../config';

export let namespaces;
let substrings;
let previews;
let options;

export const initLibrary = async () => {
  [namespaces, substrings, previews, options] = await getFiles(['namespaces', 'substrings', 'previews', 'options']);
  console.log(namespaces);
  console.log(substrings);
  console.log(previews);
  console.log(options);
};

const intersection = (setA, setB) => {
  if (setB.length < setA.length) {
    [setA, setB] = [setB, setA];
  };
  return setA.filter(item => {
    return setB.includes(item);
  });
};

export const createNote = async (note) => {
  let { currentId: id } = options;
  id += 1;
  options.currentId = id;
  const { namespaces: namespaceList, title, body } = note;
  indexText(id, title);
  indexText(id, body);
  indexNamespaces(id, namespaceList);
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
  parseTextToWords(text).forEach((word) => {
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

const indexNamespaces = (noteId, namespaceList) => {
  namespaceList.forEach((namespace) => {
    if (!namespaces[namespace]) {
      namespaces[namespace] = [noteId];
    } else {
      if (!namespaces[namespace].includes(noteId)) {
        namespaces[namespace].push(noteId);
      };
    };
  });
};

export const getNotesByParams = (phrase, namespaces) => {
  return getNotesIndexes(phrase, namespaces)
    .map((id) => {
      return previews[id];
    });
};

const getNotesIndexes = (phrase, namespaces) => {
  if (!phrase) {
    return getIndexesByNamespaces(namespaces);
  };
  let indexes = getIndexesByPhrase(phrase);
  if (indexes.length === 0 || !namespaces) {
    return indexes;
  };
  return intersection(indexes, getIndexesByNamespaces(namespaces));
};

const getIndexesByPhrase = (phrase) => {
  const words = parseTextToWords(phrase);
  if (words.length === 0) {
    return [];
  };
  if (words.length === 1) {
    return substrings[words[0]] || [];
  };
  return words
    .map(word => {
      return substrings[word] || [];
    })
    .reduce((previous, current) => {
      return intersection(previous, current);
    });
};

const getIndexesByNamespaces = (namespaceList) => {
  if (namespaceList.length === 1) {
    return namespaces[namespaceList[0]];
  };
  return namespaceList
    .map(namespace => {
      return namespaces[namespace];
    })
    .reduce((previous, current) => {
      return intersection(previous, current);
    });
};

//---------------------for tests and debugging----------------------

const test = async () => {
  await removeAllData();
  await createFiles([
    { name: 'namespaces', data: {} },
    { name: 'substrings', data: {} },
    { name: 'previews', data: {} },
    { name: 'options', data: { currentId: 0 } }
  ]);
  [namespaces, substrings, previews, options] = await getFiles(['namespaces', 'substrings', 'previews', 'options']);
  await createNote({
    namespaces: ['white', 'green'],
    title: 'Anything',
    body: 'Text about anything'
  });
  await createNote({
    namespaces: ['green'],
    title: 'Nothing',
    body: 'Text about nothing'
  });
  await createNote({
    namespaces: ['white'],
    title: 'Simple text',
    body: 'Paragraph about nothing and anything'
  });
};
