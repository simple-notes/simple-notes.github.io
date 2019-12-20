import { initDrive, checkFile, getFile, getFiles, createFile, updateFile, deleteFiles } from './drive';
import { intersection, difference, compare } from './sets';
import { MIN_WORD_LENGTH } from '../config';

let labelsData;
let indexingData;
let notesData;
let data;

export const initApp = async () => {
  await initDrive();
  if (!checkFile('notesData')) {
    if (!checkFile('data')) {
      await createFile('data', {
        labels: {},
        notes: {},
        indexing: {},
        options: {
          labelsCrtId: 0,
          notesCrtId: 0,
          version: "0.1.3"
        }
      });
    };
  } else {
    [labelsData, notesData, indexingData] = await getFiles(['labelsData', 'notesData', 'indexingData']);
    data = {};
    data.options = {
      labelsCrtId: labelsData.currentId,
      notesCrtId: notesData.currentId,
      version: "0.1.3"
    };
    delete labelsData.currentId;
    data.labels = labelsData;
    delete notesData.currentId;
    data.notes = notesData;
    data.indexing = indexingData;
    await createFile('data', data);
    await deleteFiles(['labelsData', 'notesData', 'indexingData', 'options']);
  };
  data = await getFile('data');
};

export const createNoteData = (note) => {
  const { labelsIds, title, text } = note;
  const id = data.options.notesCrtId + 1;
  data.options.notesCrtId = id;
  addWords(id, parseTextToWords(title));
  addWords(id, parseTextToWords(text));
  addLabels(id, labelsIds);
  data.notes[id] = { id: id, ...note };
  updateFile('data', data);
  return data.notes[id];
};

export const deleteNoteData = (id) => {
  const note = data.notes[id];
  deleteWords(id, parseTextToWords(note.title));
  deleteWords(id, parseTextToWords(note.text));
  deleteLabels(id, note.labelsIds);
  delete data.notes[id];
  updateFile('data', data);
};

export const updateNoteData = (changedNote) => {
  let isChanged = false;
  const oldNote = data.notes[changedNote.id];

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
    data.notes[changedNote.id] = changedNote;
    updateFile('data', data);
  };

  return data.notes[changedNote.id];
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
        if (!data.indexing[wordPart]) {
          data.indexing[wordPart] = [noteId];
        } else {
          if (!data.indexing[wordPart].includes(noteId)) {
            data.indexing[wordPart].push(noteId);
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
        if (data.indexing[wordPart] && data.indexing[wordPart].includes(noteId)) {
          if (data.indexing[wordPart].length === 1) {
            delete data.indexing[wordPart];
          } else {
            const notesIds = data.indexing[wordPart];
            notesIds.splice(notesIds.indexOf(noteId), 1);
            data.indexing[wordPart] = notesIds;
          };
        };
      };
    };
  });
};

const addLabels = (noteId, labelsIds) => {
  labelsIds.forEach(id => data.labels[id].notesIds.push(noteId));
};

const deleteLabels = (noteId, labelsIds) => {
  labelsIds.forEach(id => {
    const notesIds = data.labels[id].notesIds;
    notesIds.splice(notesIds.indexOf(noteId), 1);
    data.labels[id].notesIds = notesIds;
  });
};

export const createLabelData = async (name) => {
  const id = data.options.labelsCrtId + 1;
  data.options.labelsCrtId = id;
  data.labels[id] = {
    id: id,
    name: name,
    notesIds: []
  };
  await updateFile('data', data);
};

export const updateLabelData = async (label) => {
  data.labels[label.id] = label;
  await updateFile('data', data);
};

export const deleteLabelData = async (labelId) => {
  data.labels[labelId].notesIds.forEach((id) => {
    const { labelsIds } = data.notes[id];
    labelsIds.splice(labelsIds.indexOf(labelId), 1);
    data.notes[id].labelsIds = labelsIds;
  });
  delete data.labels[labelId];
  await updateFile('data', data);
};

export const getLabelsData = (labelsIds) => {
  if (labelsIds) {
    return labelsIds.map(id => data.labels[id]);
  };
  return Object.values(data.labels).filter(label => label.id);
};

export const getNotesData = ({ string, labelsIds }) => {
  if (string.length < MIN_WORD_LENGTH && !labelsIds.length) {
    return Object.values(data.notes).filter(note => note.id);
  };
  return getNotesIds(string, labelsIds).map(id => data.notes[id]);
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
    return data.indexing[words[0]] || [];
  };
  return words
    .map(word => data.indexing[word] || [])
    .reduce((previous, current) => intersection(previous, current));
};

const getNotesIdsByLabelsIds = (labelsIds) => {
  if (labelsIds.length === 1) {
    return data.labels[labelsIds[0]].notesIds;
  };
  return labelsIds
    .map(id => data.labels[id].notesIds)
    .reduce((previous, current) => intersection(previous, current));
};
