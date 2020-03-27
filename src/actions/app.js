import files from '../services/files';

export const changeOnlineStatus = (status) => {
  return {
    type: 'options/changeOnlineStatus',
    payload: {
      status: status
    }
  };
};

const createAppFiles = async () => {
  const date = Date.now();

  const [notes, labels, indexing] = await Promise.all([
    files.create('notes', {
      newNoteId: 0,
      byId: {},
      allIds: [],
      createdAt: date,
      updatedAt: date
    }),
    files.create('labels', {
      newLabelId: 1,
      byId: {},
      allIds: [],
      createdAt: date,
      updatedAt: date
    }),
    files.create('indexing', {
      data: {},
      createdAt: date,
      updatedAt: date
    })
  ]);

  const options = await files.create('options', {
    filesIds: {
      notes: notes.meta.id,
      labels: labels.meta.id,
      indexing: indexing.meta.id
    },
    version: '0.2.0',
    createdAt: date,
    updatedAt: date
  });

  return {
    options,
    notes,
    labels,
    indexing
  };
};

const getAppFiles = async (options) => {
  const [notes, labels, indexing] = await Promise.all([
    files.getContentById(options.filesIds.notes),
    files.getContentById(options.filesIds.labels),
    files.getContentById(options.filesIds.indexing)
  ]);

  return {
    options,
    notes,
    labels,
    indexing
  };
};

export const initApp = () => {
  return async (dispatch) => {
    dispatch({
      type: 'options/fetching'
    });
    let appData = null;
    try {
      let options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        appData = await getAppFiles(options);
      } else {
        const optionsMeta = await files.getMetaByName('options');
        switch (optionsMeta.length) {
          case 0:
            appData = await createAppFiles();
            break;
          case 1:
            options = await files.getContentById(optionsMeta[0].id);
            appData = await getAppFiles(options);
            break;
          default:
            throw new Error(`There are ${optionsMeta.length} option files`);
        };
        localStorage.setItem('options', JSON.stringify(appData.options));
      };
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      console.log(appData);
      dispatch({
        type: 'options/success',
        payload: appData
      });
    } catch (err) {
      dispatch({
        type: 'options/failure',
        error: 'Failed to fetch app options',
        payload: {
          error: err
        }
      });
    };
  };
};
