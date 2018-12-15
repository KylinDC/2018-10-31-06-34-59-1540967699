let getGroupCount = require('../../filter/grouping_count');

function count_same_elements(collection) {
  let groupCount = getGroupCount(collection);
  let keyCountArray = [];
  for (let key in groupCount) {
    keyCountArray = keyCountArray.concat(new keyCount(key, groupCount[key]));
  }
  return keyCountArray;
}

function keyCount(key, count) {
  let obj = {};
  obj['key'] = key;
  obj['count'] = count;
  return obj;
}

module.exports = count_same_elements;
