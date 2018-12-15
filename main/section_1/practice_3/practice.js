let getCommonElement = require('../../filter/two_collections_practice_1');

function collect_same_elements(collection_a, object_b) {
  let value = object_b['value'];
  return getCommonElement(collection_a, value);
}

module.exports = collect_same_elements;
