'use strict';

function hybrid_operation(collection) {
  collection = collection.map(x => x * 3 + 2);
  return collection.reduce((acc, cur) => acc += cur, 0);
}

module.exports = hybrid_operation;
