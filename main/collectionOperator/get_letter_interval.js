'use strict';
let getIntegerInterval = require('./get_integer_interval');
let decToLetter = require('./dec_to_letter');

function getLetterInterval(numberA, numberB) {
  let integerInterval = getIntegerInterval(numberA, numberB);
  return integerInterval.map(element => decToLetter(element));
}

module.exports = getLetterInterval;
