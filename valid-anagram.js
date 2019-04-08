/**
 * Frequency Counter Pattern - validAnagram
 * 
 * Given two strings, write a function to determine 
 * if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by 
 * rearranging the letters of another, 
 * such as "cinema", formed from "iceman".
 * 
 * ex.
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('rat', 'car') // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * 
 * O(N+M+O) -> O(N)
 * @param {String} str1 String to compare to {@link str2}
 * @param {String} str2 String to compare to {@link str1}
 * @return {Boolean} Is this an anagram?
 */
function validAnagram(str1, str2) {
    // If the lengths of the strings are different,
    // we're obviously not an anagram.
    if (str1.length !== str2.length) {
        return false;
    }
    // Create the objects that will represent the
    // frequency counts for both strings.
    let str1FreqCount = {};
    let str2FreqCount = {};
    // Loop through the first string, assigning
    // the frequency count of each character in the object.
    // O(N)
    for (let char of str1) {
        // We're only dealing with lower case, so lower case the char
        char = char.toLowerCase();
        str1FreqCount[char] = ++str1FreqCount[char] || 1;
    }
    // console.log(str1FreqCount)
    // Loop through the second string, assigning the frequency
    // count of each character in the object
    // O(N)
    for (let char of str2) {
        // We're only dealing with lower case, so lower case the char
        char = char.toLowerCase();
        str2FreqCount[char] = ++str2FreqCount[char] || 1;
    }
    // console.log(str2FreqCount)
    // Now we have our frequencies for both strings. Now compare them
    // O(N)
    for (let key in str1FreqCount) {
        // Make sure the key from object1 is in object2
        // and that their frequency values match.
        if (key in str2FreqCount &&
            str1FreqCount[key] === str2FreqCount[key]) {
            // We good. Keep checking the rest of the key-chars
            continue;
        } else {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true