'use strict';
let getIntegerInterval = require('./get_integer_interval');

function getLetterInterval(numberA, numberB) {
  let integerInterval = getIntegerInterval(numberA, numberB);
  return integerInterval.map(element => decToLetter(element));
}

function decToLetter(number) {
  let base26 = decToBase26(number);
  let letter = dealWithLetter(base26);
  return (removeBeginZero(letter));
}

function decToBase26(number) {
  let dict = '0abcdefghijklmnopqrstuvwxyz';
  if (number < 26) {
    return dict[number];
  } else {
    return decToBase26(Math.floor(number / 26)) + dict[number % 26];
  }
}

function dealWithLetter(base26) {
  let dict = '0abcdefghijklmnopqrstuvwxyz';
  if (base26.length <= 2) {
    if (base26.endsWith('0')) {
      if (base26.startsWith('0')) {
        base26 = base26[0] + 'z';
      } else {
        base26 = dict[dict.indexOf(base26[0]) - 1] + 'z';
      }
      return base26;
    } else {
      return base26;
    }
  } else {
    base26 = base26.substring(0, base26.length - 2) + dealWithLetter(base26.substring(base26.length - 2, base26.length));
    return dealWithLetter(base26.substring(0, base26.length - 1)) + base26.substring(base26.length - 1, base26.length);
  }
}

function removeBeginZero(base26) {
  while (base26.startsWith('0')) {
    base26 = base26.substring(1)
  }
  return base26;
}

module.exports = getLetterInterval;
