export const sortItems = array => {
  const mediane = Math.ceil(array.length / 2);
  const col1 = array.slice(0, mediane);
  const col2 = array.slice(mediane);
  const newArr = [];
  col1.forEach((_, idx) => {
    newArr.push(col1[idx]);
    newArr.push(col2[idx]);
  });
  newArr.length = array.length;
  return newArr;
};
