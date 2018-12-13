'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(element => isDivisible(element, collection_b));
}

function isDivisible(number, collection) {
  return collection.some(element => number % element === 0);
}

module.exports = choose_divisible_integer;
