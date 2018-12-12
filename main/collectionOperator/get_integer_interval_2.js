'use strict';
let collectAllEven = require('./collect_all_even');

function getEvenIntegerInterval_2(numberA, numberB) {
  let array = [];
  if (numberA < numberB) {
    for (let i = numberA; i <= numberB; i++) {
      array.push(i);
    }
  } else if (numberA > numberB) {
    for (let i = numberA; i >= numberB; i--) {
      array.push(i);
    }
  } else {
    array.push(numberA);
  }
  return collectAllEven(array);
}

module.exports = getEvenIntegerInterval_2;
