let getCommonElement = require('../practice_3/practice');

function collect_same_elements(collection_a, object_b) {
  let valueArray = collection_a.map(x => x['key']);
  return getCommonElement(valueArray, object_b);
}

module.exports = collect_same_elements;
