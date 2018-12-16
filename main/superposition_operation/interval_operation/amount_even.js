'use strict';

function amount_even(collection) {
  let evenArray = collection.filter(x => !(x % 2));
  return evenArray.reduce((acc, cur) => acc + cur, 0);
}

module.exports = amount_even;
