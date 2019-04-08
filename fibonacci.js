/**
 * Write a recursive function called `fib` which accepts a number and returns 
 * the "n"th number in the Fibonacci sequence. Recall that the Fibonacci 
 * sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...which starts 
 * with 1 and 1, and where every number thereafter is equal to the sum of 
 * the previous two numbers.
 *
 * @param {Number} n
 * @returns {Number} The nth number in the Fibonacci sequence.
 */
function fib(n) {
  return n <= 1 || n === 2 ? 1 : fib(n - 2) + fib(n - 1)
}

// fib(3)
//   fib(1) + fib(2)
//     1    +  1
//   2

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
