'use strict';

function average_uneven(collection) {
  let oddArray = collection.filter(x => x % 2);
  let sum = oddArray.reduce((acc, cur) => acc + cur, 0);
  return sum / oddArray.length;
}

module.exports = average_uneven;
