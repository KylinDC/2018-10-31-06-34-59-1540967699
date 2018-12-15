'use strict';
let getSum = require('./compute_sum.js');

function compute_average(collection) {
  let sum = getSum(collection);
  return parseFloat((sum / collection.length).toFixed(1));
}

module.exports = compute_average;

