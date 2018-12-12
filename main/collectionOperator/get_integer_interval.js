'use strict';

function getIntegerInterval(numberA, numberB) {
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
  return array;
}

module.exports = getIntegerInterval;
