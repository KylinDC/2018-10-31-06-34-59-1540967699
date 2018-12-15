'use strict';
let chooseEven = require('../filter/choose_even.js');
let collectLastElement = require('../collectionOperator/collect_last_element');
function find_last_even(collection) {
  let evenCollection = chooseEven(collection);
  return collectLastElement(evenCollection);
}

module.exports = find_last_even;
