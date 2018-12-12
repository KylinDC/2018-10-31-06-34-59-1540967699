'use strict';

function getUnion(collectionA, collectionB) {
  let difference = getDifferenceInSecond(collectionA, collectionB);
  return collectionA.concat(difference);
}

function getDifferenceInSecond(collectionA, collectionB) {
  return collectionB.filter(element => collectionA.indexOf(element) === -1 ? true : false);
}

module.exports = getUnion;
