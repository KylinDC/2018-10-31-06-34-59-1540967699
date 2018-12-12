'use strict';

function get_integer_interval(number_a, number_b) {
  let array = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      array.push(i);
    }
  } else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      array.push(i);
    }
  } else {
    array.push(number_a);
  }
  return array;
}

module.exports = get_integer_interval;
