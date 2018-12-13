'use strict';

function chooseEven(collection) {
  return collection.filter(element => element % 2 === 0);
}

module.exports = chooseEven;
