'use strict';
let decToLetter = require('../collectionOperator/dec_to_letter');

var number_map_to_word_over_26 = function (collection) {
  return collection.map(element => decToLetter(element));
};

module.exports = number_map_to_word_over_26;
