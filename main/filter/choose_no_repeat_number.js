'use strict';

function choose_no_repeat_number(collection) {
  let collectionSet = new Set(collection);
  return Array.from(collectionSet);
}

module.exports = choose_no_repeat_number;
