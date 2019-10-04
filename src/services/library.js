import { addFileToChangesQueue, sendChanges, getFiles } from './drive';
import { MIN_WORD_LENGTH } from '../config';

export let namespaces;
let substrings;
let previews;

export const initLibrary = async () => {
  [namespaces, substrings, previews] = await getFiles(['namespaces', 'substrings', 'previews']);
  
  await createNote({
    id: 1,
    namespaces: ['white', 'green'],
    title: 'Anything',
    body: 'Text about anything'
  });
  await createNote({
    id: 2,
    namespaces: ['green'],
    title: 'Nothing',
    body: 'Text about nothing'
  });
  await createNote({
    id: 3,
    namespaces: ['white'],
    title: 'Simple text',
    body: 'Paragraph about nothing and anything'
  });
  //await sendChanges();
  
  console.log(namespaces);
  console.log(substrings);
  console.log(previews);
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
  const { id, namespaces: namespaceList, title, body } = note;
  indexText(id, title);
  indexText(id, body);
  indexNamespaces(id, namespaceList);
  createNotePreview(note);
  addFileToChangesQueue('namespaces', 'upsert', namespaces);
  addFileToChangesQueue('substrings', 'upsert', substrings);
  addFileToChangesQueue('previews', 'upsert', previews);
  await sendChanges();
};

const createNotePreview = (note) => {
  const { id, namespaces, title, body } = note;
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
