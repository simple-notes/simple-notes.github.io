export const intersection = (setA, setB) => {
  if (setB.length < setA.length) {
    [setA, setB] = [setB, setA];
  };
  return setA.filter(item => setB.includes(item));
};

export const difference = (setA, setB) => {
  return setA.filter(item => !setB.includes(item));
};

//Not universal. Only for this task. Is correctly if each set dont have duplicates
export const compare = (setA, setB) => {
  if (setA.length !== setB.length) {
    return false;
  };
  return setA.every(item => setB.includes(item));
};
