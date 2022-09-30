
export function setTable(object, array) {
  const copyObject = { ...object };
  const resultArr = [];
  for (const prop in copyObject) {
    if (array.includes(prop)) {
      const resultObject = {
        key: prop,
        value: copyObject[prop],
      };
      resultArr.push(resultObject);
    }
  }
  resultArr.sort((a, b) => array.indexOf(a.key) - array.indexOf(b.key));

  const alphabetArr = [];
  for (let i = 0; i < array.length; i++) {
    delete copyObject[array[i]];
  }
  for (const prop in copyObject) {
    if (Object.prototype.hasOwnProperty.call(copyObject, prop)) {
      const resultObject = {
        key: prop,
        value: copyObject[prop],
      };
      alphabetArr.push(resultObject);
    }
  }
  alphabetArr.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
  return [...resultArr, ...alphabetArr];
}

