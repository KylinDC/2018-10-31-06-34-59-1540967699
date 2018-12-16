'use strict';

function even_to_letter(collection) {
  let dict = '0abcdefghijklmn';
  let evenArray = collection.filter(x => !(x % 2));
  return evenArray.map(x => dict[x]);
}

module.exports = even_to_letter;
