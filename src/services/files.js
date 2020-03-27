import { fetch } from './fetch';

const getAllMeta = async (pageToken) => {
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
      ? [...files, ...getAllMeta(nextPageToken)]
      : files;
  } catch (err) {
    throw new Error(err.message);
  };
};

const getMetaByName = async (fileName) => {
  try {
    const { files } = await fetch('drive/v3/files', {
      method: 'get',
      params: {
        q: `name='${fileName}'`,
        spaces: 'appDataFolder',
        fields: 'files(id,name)'
      }
    });
    return files;
  } catch (err) {
    throw new Error(err.message);
  };
};

const getMetaById = async (fileId) => {
  try {
    return await fetch(`drive/v3/files/${fileId}`, {
      method: 'get',
      params: {
        fields: 'id,name'
      }
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

const getContentById = async (fileId) => {
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

const createMeta = async (fileName) => {
  try {
    return await fetch('drive/v3/files', {
      method: 'post',
      data: {
        mimeType: 'application/json',
        name: fileName,
        parents: ['appDataFolder']
      }
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

const updateMetaById = async (fileId, fileData) => {
  try {
    await fetch(`drive/v3/files/${fileId}`, {
      method: 'patch',
      data: fileData
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

const updateContentById = async (fileId, fileData) => {
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

const removeById = async (fileId) => {
  try {
    await fetch(`drive/v3/files/${fileId}`, {
      method: 'delete'
    });
  } catch (err) {
    throw new Error(err.message);
  };
};

const create = async (fileName, fileData) => {
  const { id } = await createMeta(fileName);
  const extendedData = { ...fileData, meta: { id, fileName } };
  await updateContentById(id, extendedData);
  return extendedData;
};

export default {
  getAllMeta,
  getMetaByName,
  getMetaById,
  getContentById,
  updateMetaById,
  updateContentById,
  removeById,
  create
};
