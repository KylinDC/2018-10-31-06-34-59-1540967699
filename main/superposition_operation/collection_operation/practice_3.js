'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddArray = collection.filter(x => x % 2);
  return oddArray.reduce((acc, cur) => acc += cur * 3 + 5, 0);
}

module.exports = hybrid_operation_to_uneven;

