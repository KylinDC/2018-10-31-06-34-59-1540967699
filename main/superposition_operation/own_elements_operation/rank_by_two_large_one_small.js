'use strict';

function rank_by_two_large_one_small(collection) {
  let ascendSortArray = collection.sort(ascendSort);
  let specialRankArray = [];
  for (let i = 2; i < collection.length; i += 3) {
    specialRankArray = specialRankArray.concat(ascendSortArray.slice(i - 1, i + 1));
    specialRankArray.push(ascendSortArray[i - 2]);
  }
  let differ = collection.length - specialRankArray.length;
  return specialRankArray.concat(ascendSortArray.slice(-differ));
}

function ascendSort(a, b) {
  return a > b ? 1 : -1;
}

module.exports = rank_by_two_large_one_small;
