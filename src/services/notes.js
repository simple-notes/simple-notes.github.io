import { initDrive, checkFile, getFile, getFiles, createFile, createFiles, updateFile, updateFiles } from './drive';
import { intersection, difference, compare } from './sets';
import { MIN_WORD_LENGTH } from '../config';

let labelsData;
let indexingData;
let notesData;
let options;

export const initApp = async () => {
  await initDrive();
  if (!checkFile('notesData')) {
    await createFiles([
      { name: 'labelsData', data: { currentId: 0 } },
      { name: 'notesData', data: { currentId: 0 } },
      { name: 'indexingData', data: {} },
      { name: 'options', data: { version: "0.0.2" } }
    ]);
  } else {
    if (!checkFile('options')) {
      await createFile('options', { version: "0.0.2" });
      await initDrive();
      notesData = await getFile('notesData');
      indexingData = {};
      Object.values(notesData).forEach(({ id, title, text }) => {
        if (id) {
          addWords(id, parseTextToWords(title));
          addWords(id, parseTextToWords(text));
        };
      });
      await updateFile('indexingData', indexingData);
    };
  };
  [labelsData, notesData, indexingData, options] = await getFiles(['labelsData', 'notesData', 'indexingData', 'options']);
};

export const createNoteData = (note) => {
  const { labelsIds, title, text } = note;
  const id = notesData.currentId + 1;
  notesData.currentId = id;
  addWords(id, parseTextToWords(title));
  addWords(id, parseTextToWords(text));
  addLabels(id, labelsIds);
  notesData[id] = { id: id, ...note };
  updateFiles([
    { name: 'labelsData', data: labelsData },
    { name: 'indexingData', data: indexingData },
    { name: 'notesData', data: notesData }
  ]);
  return notesData[id];
};

export const deleteNoteData = async (id) => {
  const note = notesData[id];

  deleteWords(id, parseTextToWords(note.title));
  deleteWords(id, parseTextToWords(note.text));
  deleteLabels(id, note.labelsIds);
  delete notesData[id];

  await updateFiles([
    { name: 'labelsData', data: labelsData },
    { name: 'indexingData', data: indexingData },
    { name: 'notesData', data: notesData }
  ]);
};

export const updateNoteData = (changedNote) => {
  let isChanged = false;
  const oldNote = notesData[changedNote.id];

  if (changedNote.title !== oldNote.title) {
    const oldWords = parseTextToWords(oldNote.title);
    const newWords = parseTextToWords(changedNote.title);
    const deletedWords = difference(oldWords, newWords);
    const addedWords = difference(newWords, oldWords);

    deleteWords(changedNote.id, deletedWords);
    addWords(changedNote.id, addedWords);

    isChanged = true;
  };

  if (changedNote.text !== oldNote.text) {
    const oldWords = parseTextToWords(oldNote.text);
    const newWords = parseTextToWords(changedNote.text);
    const deletedWords = difference(oldWords, newWords);
    const addedWords = difference(newWords, oldWords);

    deleteWords(changedNote.id, deletedWords);
    addWords(changedNote.id, addedWords);

    isChanged = true;
  };

  if (!compare(changedNote.labelsIds, oldNote.labelsIds)) {
    const deletedLabels = difference(oldNote.labelsIds, changedNote.labelsIds);
    const addedLabels = difference(changedNote.labelsIds, oldNote.labelsIds);

    deleteLabels(changedNote.id, deletedLabels);
    addLabels(changedNote.id, addedLabels);

    isChanged = true;
  };

  if (isChanged) {
    notesData[changedNote.id] = changedNote;
    updateFiles([
      { name: 'labelsData', data: labelsData },
      { name: 'notesData', data: notesData },
      { name: 'indexingData', data: indexingData }
    ]);
  };

  return notesData[changedNote.id];
};

const parseTextToWords = (text) => {
  const regex = new RegExp(`[a-zа-яё]{${MIN_WORD_LENGTH},}`, 'gu');
  return text.toLowerCase().match(regex) || [];
};

const addWords = (noteId, words) => {
  words.forEach(word => {
    for (let i = 0; i <= word.length - MIN_WORD_LENGTH; i++) {
      for (let j = word.length; j >= i + MIN_WORD_LENGTH; j--) {
        const wordPart = word.slice(i, j);
        if (!indexingData[wordPart]) {
          indexingData[wordPart] = [noteId];
        } else {
          if (!indexingData[wordPart].includes(noteId)) {
            indexingData[wordPart].push(noteId);
          };
        };
      };
    };
  });
};

const deleteWords = (noteId, words) => {
  words.forEach(word => {
    for (let i = 0; i <= word.length - MIN_WORD_LENGTH; i++) {
      for (let j = word.length; j >= i + MIN_WORD_LENGTH; j--) {
        const wordPart = word.slice(i, j);
        if (indexingData[wordPart] && indexingData[wordPart].includes(noteId)) {
          if (indexingData[wordPart].length === 1) {
            delete indexingData[wordPart];
          } else {
            const notesIds = indexingData[wordPart];
            notesIds.splice(notesIds.indexOf(noteId), 1);
            indexingData[wordPart] = notesIds;
          };
        };
      };
    };
  });
};

const addLabels = (noteId, labelsIds) => {
  labelsIds.forEach(id => labelsData[id].notesIds.push(noteId));
};

const deleteLabels = (noteId, labelsIds) => {
  labelsIds.forEach(id => {
    const notesIds = labelsData[id].notesIds;
    notesIds.splice(notesIds.indexOf(noteId), 1);
    labelsData[id].notesIds = notesIds;
  });
};

export const createLabelData = async (name) => {
  const id = labelsData.currentId + 1;
  labelsData.currentId = id;
  labelsData[id] = {
    id: id,
    name: name,
    notesIds: []
  };
  await updateFile('labelsData', labelsData);
};

export const updateLabelData = async (label) => {
  labelsData[label.id] = label;
  await updateFile('labelsData', labelsData);
};

export const deleteLabelData = async (labelId) => {
  labelsData[labelId].notesIds.forEach((id) => {
    const { labelsIds } = notesData[id];
    labelsIds.splice(labelsIds.indexOf(labelId), 1);
    notesData[id].labelsIds = labelsIds;
  });

  delete labelsData[labelId];

  await updateFiles([
    { name: 'labelsData', data: labelsData },
    { name: 'notesData', data: notesData }
  ]);
};

export const getLabelsData = (labelsIds) => {
  if (labelsIds) {
    return labelsIds.map(id => labelsData[id]);
  };
  return Object.values(labelsData).filter(label => label.id);
};

export const getNotesData = ({ string, labelsIds }) => {
  if (!string && !labelsIds.length) {
    return Object.values(notesData).filter(note => note.id);
  };
  return getNotesIds(string, labelsIds).map(id => notesData[id]);
};

const getNotesIds = (string, labelsIds) => {
  if (!string) {
    return getNotesIdsByLabelsIds(labelsIds);
  };
  let ids = getNotesIdsByString(string);
  if (ids.length === 0 || !labelsIds.length) {
    return ids;
  };
  return intersection(ids, getNotesIdsByLabelsIds(labelsIds));
};

const getNotesIdsByString = (string) => {
  const words = parseTextToWords(string);
  if (words.length === 0) {
    return [];
  };
  if (words.length === 1) {
    return indexingData[words[0]] || [];
  };
  return words
    .map(word => indexingData[word] || [])
    .reduce((previous, current) => intersection(previous, current));
};

const getNotesIdsByLabelsIds = (labelsIds) => {
  if (labelsIds.length === 1) {
    return labelsData[labelsIds[0]].notesIds;
  };
  return labelsIds
    .map(id => labelsData[id].notesIds)
    .reduce((previous, current) => intersection(previous, current));
};
