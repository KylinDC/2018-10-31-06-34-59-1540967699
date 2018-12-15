'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length === collection_b.length) {
    return collection_a.every((element, index) => element === collection_b[index] ? true : false);
  }
  else {
    return false;
  }
}

module.exports = compare_collections;


