'use strict';

function average_to_letter(collection) {
  let dict = '0abcdefghijklmn';
  let sum = collection.reduce((acc, cur) => acc += cur, 0);
  let average = sum / collection.length;
  return dict[Math.ceil(average)];
}

module.exports = average_to_letter;
