import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import { getLabelsData, createLabelData, updateLabelData, deleteLabelData } from '../services/library';
import Labels from '../components/Labels';

const LabelsContainer = ({ open, checkedIds, setCheckedIds }) => {
  const [labels, setLabels] = useState(getLabelsData());
  const [edit, setEdit] = useState(false);
  const [editedLabel, setEditedLabel] = useState({});
  const [newLabel, setNewLabel] = useState({ name: '', disabled: true });

  useEffect(() => {
    if (!open) {
      setEdit(false);
    };
  }, [open]);

  useEffect(() => {
    if (!edit) {
      setEditedLabel({});
      setNewLabel({ name: '', disabled: true });
    }
  }, [edit]);

  const toggleCheck = (id) => () => {
    const index = checkedIds.indexOf(id);
    const newCheckedIds = [...checkedIds];
    if (index === -1) {
      newCheckedIds.push(id);
    } else {
      newCheckedIds.splice(index, 1);
    };
    setCheckedIds(newCheckedIds);
  };

  const toggleEditor = () => {
    setEdit(!edit);
  };

  const selectEditedLabel = (label) => () => {
    if (label) {
      if (label.id !== editedLabel.id) {
        setEditedLabel({ ...label, disabled: true });
      };
    } else {
      setEditedLabel({});
    };
  };

  const createLabel = async () => {
    await createLabelData(newLabel.name);
    setNewLabel({ name: '', disabled: true });
    setLabels(getLabelsData());
  };

  const updateLabel = async (event) => {
    event.stopPropagation();
    await updateLabelData(editedLabel);
    setLabels(getLabelsData());
  };

  const deleteLabel = (id) => async (event) => {
    event.stopPropagation();
    await deleteLabelData(id);
    setLabels(getLabelsData());
    setCheckedIds(checkedIds.filter(checkedId => checkedId !== id));
  };

  const changeName = (originalName) => ({ target: { value } }) => {
    const currentLabel = originalName ? editedLabel : newLabel;
    const currentSetMethod = originalName ? setEditedLabel : setNewLabel;
    const validateResult = validateName(value, originalName);
    currentSetMethod({ ...currentLabel, name: value, ...validateResult });
  };

  const validateName = (newName, originalName) => {
    newName = newName.trim();

    if (!newName.length) {
      return { error: true, message: "Only spaces", disabled: true };
    };

    if (originalName && newName === originalName) {
      return { error: false, disabled: false };
    };

    const dublicate = labels.some(({ name }) => name === newName);
    if (dublicate) {
      return { error: true, message: "Dublicate", disabled: true };
    } else {
      return { error: false, disabled: false };
    };
  };

  return (
    <Labels
      labels={labels}
      checkedIds={checkedIds}
      toggleCheck={toggleCheck}
      edit={edit}
      toggleEditor={toggleEditor}
      selectEditedLabel={selectEditedLabel}
      editedLabel={editedLabel}
      newLabel={newLabel}
      changeName={changeName}
      createLabel={createLabel}
      updateLabel={updateLabel}
      deleteLabel={deleteLabel}
    />
  );
};

export default LabelsContainer;
