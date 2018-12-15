'use strict';
let rankDesc = require('../map/rank_desc.js');
let getAverage = require('./compute_average.js');

function compute_median(collection) {
  let descCollection = rankDesc(collection);
  if (collection.length % 2 === 0) {
    return getAverage([descCollection[collection.length / 2 - 1], descCollection[collection.length / 2]]);
  }
  else {
    return descCollection[Math.floor(collection.length / 2)];
  }
}

module.exports = compute_median;


