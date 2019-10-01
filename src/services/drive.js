import { fetch } from './fetch';

const Drive = function () {
  this.ids = {};
};

Drive.prototype.initDrive = async function () {
  const ids = getIdsFromFileList(await getFilesList());
  this.ids = ids;
};

const getFilesList = async function (pageToken) {
  try {
    const { files, nextPageToken } = await fetch('drive/v3/files', {
      method: 'get',
      params: {
        spaces: 'appDataFolder',
        pageToken: pageToken,
        fields: 'nextPageToken, files(id, name)'
      }
    });
    return (!!nextPageToken) ? [...files, ...getFilesList(nextPageToken)] : files;
  } catch (err) {
    throw new Error(err.message);
  };
};

const getIdsFromFileList = function (fileList) {
  const ids = {};
  fileList.forEach(({ id, name }) => {
    name = name.match(/[\d\w]+/)[0];
    if (!ids[name]) {
      ids[name] = id;
    } else {
      throw new Error('Duplicate data, check files structure');
    };
  });
  return ids;
};

Drive.prototype.updateData = async function (fileName, fileData) {
  if (!this.ids[fileName]) {
    const id = await createFile(fileName, fileData);
    this.ids[fileName] = id;
  } else {
    await updateFileData(this.ids[fileName], fileData);
  };
};

const createFile = async function (fileName, fileData) {
  const id = await createFileMetadata(fileName);
  await updateFileData(id, fileData);
  return id;
};

const createFileMetadata = async function (fileName) {
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

const updateFileData = async function (fileId, fileData) {
  try {
    await fetch(`upload/drive/v3/files/${fileId}`, {
      method: 'patch',
      data: (typeof fileData === 'string') ? fileData : JSON.stringify(fileData)
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

Drive.prototype.getFile = async function (fileName) {
  if (!!this.ids[fileName]) {
    return await getFileData(this.ids[fileName]);
  } else {
    throw new Error('File dosn\'t exist');
  };
};

const getFileData = async function (fileId) {
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

Drive.prototype.removeAllData = async () => {
  const filesList = await getFilesList();
  const promises = [];
  filesList.forEach(({ id }) => {
    promises.push(removeFile(id));
  });
  await Promise.all(promises);
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

export default new Drive();
