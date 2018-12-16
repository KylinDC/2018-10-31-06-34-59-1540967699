'use strict';

var is_exist_element = function (collection, element) {
  let evenIndexArray = collection.filter((element, index) => (index % 2 === 0));
  return (evenIndexArray.indexOf(element) === -1) ? false : true;
};

module.exports = is_exist_element;
