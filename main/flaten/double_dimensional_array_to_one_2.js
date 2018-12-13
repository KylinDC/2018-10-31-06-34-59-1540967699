'use strict';
let flattenArray = require('./double_dimensional_array_to_one_1');
let chooseNoRepeat = require('../filter/choose_no_repeat_number');

function double_to_one(collection) {
  let flatCollection = flattenArray(collection);
  return chooseNoRepeat(flatCollection);
}

module.exports = double_to_one;
