import { fetch } from './fetch';

let ids = {};

export const initDrive = async () => {
  (await getFilesList())
    .forEach(({ id, name }) => {
      ids[name] = id;
    });
};


const getFilesList = async (pageToken) => {
  try {
    const { files, nextPageToken } = await fetch('drive/v3/files', {
      method: 'get',
      params: {
        spaces: 'appDataFolder',
        pageToken: pageToken,
        fields: 'nextPageToken, files(id, name)'
      }
    });
    return (nextPageToken)
      ? [...files, ...getFilesList(nextPageToken)]
      : files;
  } catch (err) {
    throw new Error(err.message);
  };
};

export const checkFile = (fileName) => {
  return ids.hasOwnProperty(fileName);
};

export const checkFiles = (fileNameList) => {
  return fileNameList.every(name => ids.hasOwnProperty(name));
};

export const createFile = async (fileName, fileData) => {
  await createFileMetadata(fileName);
  await updateFileContent(ids[fileName], fileData);
};

export const createFiles = async (fileList) => {
  await Promise.all(fileList
    .map(async ({ name }) => await createFileMetadata(name))
  );
  await updateFiles(fileList);
};

export const updateFile = async (fileName, fileData) => {
  await updateFileContent(ids[fileName], fileData);
};

export const updateFiles = async (fileList) => {
  await Promise.all(fileList
    .map(async ({ name, data }) => await updateFileContent(ids[name], data))
  );
};

export const deleteFile = async (fileName) => {
  await removeFile(ids[fileName]);
};

export const deleteFiles = async (fileNameList) => {
  await Promise.all(fileNameList
    .map(async fileName => await removeFile(ids[fileName]))
  );
};

export const getFile = async (fileName) => {
  return await getFileContent(ids[fileName]);
};

export const getFiles = async (fileNameList) => {
  return await Promise.all(
    fileNameList.map(async fileName => await getFile(fileName))
  );
};

const createFileMetadata = async (fileName) => {
  try {
    const { id } = await fetch('drive/v3/files', {
      method: 'post',
      data: {
        mimeType: 'application/json',
        name: fileName,
        parents: ['appDataFolder']
      }
    });
    ids[fileName] = id;
  } catch (err) {
    throw new Error(err.message);
  };
};

const updateFileContent = async (fileId, fileData) => {
  try {
    await fetch(`upload/drive/v3/files/${fileId}`, {
      method: 'patch',
      data: (typeof fileData === 'string')
        ? fileData
        : JSON.stringify(fileData)
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

export const removeFile = async (fileId) => {
  try {
    await fetch(`drive/v3/files/${fileId}`, {
      method: 'delete'
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

const getFileContent = async (fileId) => {
  try {
    return await fetch(`drive/v3/files/${fileId}`, {
      method: 'get',
      params: {
        alt: 'media'
      }
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

//For tests and debugging
export const deleteAllData = async () => {
  await Promise.all(
    (await getFilesList())
      .map(async ({ id }) => await removeFile(id))
  );
};
