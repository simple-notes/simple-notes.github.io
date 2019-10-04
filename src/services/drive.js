import { fetch } from './fetch';

let ids = {};
let changesQueue = [];

export const initDrive = async () => {
  await removeAllData();
  
  addFileToChangesQueue('namespaces', 'upsert', {});
  addFileToChangesQueue('substrings', 'upsert', {});
  addFileToChangesQueue('previews', 'upsert', {});
  await sendChanges();
  
  setIdsFromFileList(await getFilesList());
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

const setIdsFromFileList = (fileList) => {
  fileList.forEach(({ id, name }) => {
    name = name.match(/[\d\w]+/)[0];
    ids[name] = id;
  });
};

export const addFileToChangesQueue = (fileName, changeType, fileData) => {
  changesQueue = changesQueue.filter(({ name }) => {
    return name !== fileName;
  });
  changesQueue.push({
    name: fileName,
    type: changeType,
    data: fileData
  });
};

export const sendChanges = async () => {
  await Promise.all(
    changesQueue.map(async ({ name, type, data }) => {
      switch (type) {
        case 'upsert':
          return await upsertFile(name, data);
        default:
          return;
      };
    })
  );
};

const upsertFile = async (fileName, fileData) => {
  if (!ids[fileName]) {
    await createFile(fileName, fileData);
  } else {
    await updateFileContent(ids[fileName], fileData);
  };
};

const createFile = async (fileName, fileData) => {
  const id = await createFileMetadata(fileName);
  await updateFileContent(id, fileData);
  ids[fileName] = id;
};

const createFileMetadata = async (fileName) => {
  try {
    const { id } = await fetch('drive/v3/files', {
      method: 'post',
      data: {
        mimeType: 'application/json',
        name: `${fileName}.json`,
        parents: ['appDataFolder']
      }
    });
    return id;
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

export const getFiles = async (fileNameList) => {
  return await Promise.all(
    fileNameList.map(async (fileName) => {
      return await getFile(fileName);
    })
  );
};

const getFile = async (fileName) => {
  if (ids[fileName]) {
    return await getFileData(ids[fileName]);
  } else {
    throw new Error('File doesn\'t exist');
  };
};

const getFileData = async (fileId) => {
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

//---------------------for tests and debugging----------------------

export const removeAllData = async () => {
  await Promise.all(
    (await getFilesList())
      .map(async ({ id }) => {
        return await removeFile(id);
      })
  );
};

const removeFile = async (fileId) => {
  try {
    await fetch(`drive/v3/files/${fileId}`, {
      method: 'delete'
    });
  } catch (err) {
    throw new Error(err.message);
  };
};
