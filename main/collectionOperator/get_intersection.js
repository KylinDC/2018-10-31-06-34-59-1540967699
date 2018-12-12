'use strict';

function getIntersection(collectionA, collectionB) {
  return collectionB.filter(element => collectionA.indexOf(element) !== -1 ? true : false);
}

module.exports = getIntersection;
