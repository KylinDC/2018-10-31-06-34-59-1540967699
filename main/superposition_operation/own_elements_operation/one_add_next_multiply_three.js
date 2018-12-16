'use strict';

function one_add_next_multiply_three(collection) {
  let sumMultiplyThree = [];
  for (let i = 0; i < collection.length - 1; i++) {
    sumMultiplyThree.push((collection[i] + collection[i + 1]) * 3);
  }
  return sumMultiplyThree;
}

module.exports = one_add_next_multiply_three;
