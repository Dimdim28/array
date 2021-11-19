"use strict";

const removeElements = (array, ...items) => {
  for (let item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};

module.exports = { removeElements };
