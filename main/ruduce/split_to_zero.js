'use strict';

function spilt_to_zero(number, interval) {
  let arr = [number];
  let i = parseFloat((number - interval).toFixed(1));
  arr.push(i);
  while (i > 0) {
    i = parseFloat((i - interval).toFixed(1));
    arr.push(i);
  }
  return arr;
}

module.exports = spilt_to_zero;
