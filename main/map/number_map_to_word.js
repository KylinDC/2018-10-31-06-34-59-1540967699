'use strict';
var number_map_to_word = function (collection) {
  let dict = '0abcdefghijklmnopqrstuvwxyz';
  return collection.map(x => dict[x]);
};

module.exports = number_map_to_word;
