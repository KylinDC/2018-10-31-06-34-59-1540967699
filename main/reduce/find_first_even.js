'use strict';
let chooseEven = require('../filter/choose_even.js');

function find_first_even(collection) {
  let evenCollection = chooseEven(collection);
  return evenCollection[0];
}

module.exports = find_first_even;

