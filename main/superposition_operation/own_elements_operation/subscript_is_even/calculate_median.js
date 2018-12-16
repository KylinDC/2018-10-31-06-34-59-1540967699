'use strict';

var calculate_median = function (collection) {
  let oddIndexArray = collection.filter((element, index) => index % 2);
  return getMedian(oddIndexArray);
};

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

module.exports = calculate_median;
