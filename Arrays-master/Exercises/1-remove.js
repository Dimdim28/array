"use strict";

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

let array = [1, 2, 3, 4];
removeElement(array, 1, 5, 6, 7);
console.log(array);
module.exports = { removeElement };
