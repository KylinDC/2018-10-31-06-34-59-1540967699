'use strict';

var even_asc_odd_desc = function (collection) {
  let oddArray = collection.filter(x => x % 2);
  let evenArray = collection.filter(x => !(x % 2));
  let ascendSortEvenArray = evenArray.sort(ascendSort);
  let descendSortOddArray = oddArray.sort(descendSort);
  return ascendSortEvenArray.concat(descendSortOddArray);
};

function ascendSort(a, b) {
  return a > b ? 1 : -1;
}

function descendSort(a, b) {
  return a > b ? -1 : 1;
}

module.exports = even_asc_odd_desc;
