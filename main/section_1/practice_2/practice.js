let getCommonElement = require('../../filter/two_collections_practice_1');
let getFlattenArray = require('../../flaten/double_dimensional_array_to_one_1');

function collect_same_elements(collection_a, collection_b) {
  let flatCollectionB = getFlattenArray(collection_b);
  return getCommonElement(collection_a, flatCollectionB);
}

module.exports = collect_same_elements;
