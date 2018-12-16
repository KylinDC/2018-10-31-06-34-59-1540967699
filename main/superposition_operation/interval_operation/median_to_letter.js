'use strict';
let decToLetter = require('../../collectionOperator/dec_to_letter');

function median_to_letter(collection) {
  let median = getMedian(collection);
  return decToLetter(Math.round(median));
}

function getMedian(arr) {
  let sortedArr = arr.sort(ascendSort);
  let halfIndex = arr.length / 2;
  if (arr.length % 2) {
    return sortedArr[Math.floor(halfIndex)];
  }
  else {
    return getAverage(sortedArr[halfIndex - 1], sortedArr[halfIndex]);
  }
}

function getAverage() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

function ascendSort(a, b) {
  return a > b ? 1 : -1;
}

module.exports = median_to_letter;
