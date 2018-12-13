'use strict';

function grouping_count(collection) {
  let collectionObject = {};
  for (let element of collection) {
    if (collectionObject[element]) {
      collectionObject[element] += 1;
    } else {
      collectionObject[element] = 1;
    }
  }
  return collectionObject;
}

module.exports = grouping_count;
