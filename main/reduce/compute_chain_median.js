'use strict';
let getMedian = require('./compute_median.js');

function compute_chain_median(collection) {
  let chainArray = collection.split('->');
  chainArray = chainArray.map(element => parseFloat(element));
  console.log(chainArray);
  return getMedian(chainArray);
}

module.exports = compute_chain_median;
