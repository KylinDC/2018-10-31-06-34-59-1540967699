'use strict';

var single_element = function (collection) {
  let singleElemnent = [];
  let oddIndexArray = collection.filter((element, index) => index % 2);
  for (let i of oddIndexArray) {
    if (oddIndexArray.indexOf(i) === oddIndexArray.lastIndexOf(i)) {
      singleElemnent.push(i);
    }
  }
  return singleElemnent;
};

module.exports = single_element;
