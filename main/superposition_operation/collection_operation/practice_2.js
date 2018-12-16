'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddArray = collection.filter(x => x % 2);
  return oddArray.map(x => x * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;

