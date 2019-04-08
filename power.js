/**
 * Write a function called power which accepts a base and an exponent.The 
 * function should return the power of the base to the exponent.This
 * function should mimic the functionality of `Math.pow()` - do not worry 
 * about negative bases and exponents.
 *
 * @param {Number} base
 * @param {Number} exponent
 * @returns The power of the {@link base} to the {@link exponent}
 */
function power(base, exponent) {
  return exponent < 1 ?
    1 : base * power(base, exponent - 1);
}

// Trace:
// power(2, 2)
//   2 * power(2, 1)
//         2 * power(2, 0)
//               1
//         2  *  1
//   2 * 2 * 1

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16
