/**
 * Implement a function called, "areThereDuplicates" which 
 * accepts a "variable number of arguments", and checks 
 * whether there are any duplicates among the arguments passed in. 
 * You can solve this using the frequency counter pattern 
 * OR the multiple pointers pattern.
 * 
 * Restrictions:
 * Time: O(N)
 * Space: O(N)
 *
 * @param {*} args The variables to test against.
 * @returns {Boolean} Are there duplicates?
 */
function areThereDuplicates(...args) {
    // Short circuit if there are no args.
    if (!args || args && args.length === 0) {
        return false;
    }
    // The map to store occurences of each arg
    let map = {};
    // Loop through the args, for each arg...
    for (let arg of args) {
        // If the arg exists in the map, return true
        if (map.hasOwnProperty(arg)) {
            return true
        } else {
            // Populate the map with the arg.
            map[arg] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

/**
 * Different solution using multiple pointers pattern.
 * 
 * Time: O(n log n)
 * Space: O(1)
 *
 * @param {*} args The variables to test against.
 * @returns {Boolean} Are there duplicates?
 */
function areThereDuplicatesAlt(...args) {
    args = args.sort(); // O(n log n)
    let l = 0;
    let r = 1;
    // O(N)
    while (r < args.length) {
        // If the left and right pointers
        // are the same, we have a duplicate
        if (args[l] === args[r]) {
            return true;
        } else {
            // Increment the pointers to keep
            // traversing the args.
            ++l;
            ++r;
        }
    }
    return false;
}

console.log(areThereDuplicatesAlt(1, 2, 3)) // false
console.log(areThereDuplicatesAlt(1, 2, 2)) // true
console.log(areThereDuplicatesAlt('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicatesAlt(1, 2, 3, 4, 5, 6, 5, 7)) // true