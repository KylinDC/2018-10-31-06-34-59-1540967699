'use strict';

var calculate_average = function (collection) {
  let oddIndexArray = collection.filter((element, index) => index % 2);
  return getAverage(oddIndexArray);
};

function getAverage(arr) {
  let sum = arr.reduce((acc, cur) => acc += cur, 0);
  return sum / arr.length;
}

module.exports = calculate_average;
