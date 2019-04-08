/**
 * Write a function called "sameFrequency". Given two 
 * positive integers, find out if the two numbers have 
 * the same frequency of digits. Your solution must have
 * the following complexities:
 * 
 * Time: O(N)
 *
 * @param {Number} num1 The number to compare to {@link num2}
 * @param {Number} num2 The number to compare to {@link num1}
 * @returns {Boolean} Do they have the same frequency of digits?
 */
function sameFrequency(num1, num2) {
    // First convert the numbers to strings so that we can 
    // work with individual digits.
    num1 = num1.toString();
    num2 = num2.toString();
    // Create the map to hold references to each digit
    // of {@link num1}.
    const map = {};
    // Short circuit if lengths are different or
    // if {@link num1} or {@link num2} are NaN
    if (num1.length !== num2.length ||
        isNaN(num1) || isNaN(num2)) {
        return false;
    }
    // Loop through {@link num1}'s digits, creating keys
    // in the map representing digits, along with values
    // that represent frequency.
    for (let digit of num1) {
        // If map[digit] exists, increment, else set freq/value to 1
        map[digit] = ++map[digit] || 1;
    }
    // Loop through the second number's digits..
    for (let digit of num2) {
        // If digit doesn't exist in map, return false.
        // console.log(digit in map)
        if (!(digit in map)) {
            return false;
        }
        // If frequency is <= 0, return false
        // (Mismatched frequencies)
        if (map[digit] <= 0) {
            return false;
        } else {
            // Decrement the frequency
            --map[digit];
        }
    }
    return true;
}


console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(2122, 2112)) // false