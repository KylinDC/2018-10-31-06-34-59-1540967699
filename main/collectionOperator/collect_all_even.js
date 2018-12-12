'use strict';

function collectAllEven(collection) {
  return collection.filter(element => element % 2 === 0);
}

module.exports = collectAllEven;
