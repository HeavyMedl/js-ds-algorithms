/**
 * Write a function called `collectStrings` which accepts an object and returns 
 * an array of all the values in the object that have a typeof string.
 *
 * @param {Object} obj
 * @param {String[]} strArr The accumulator
 * @returns {String[]} The array containing all the strings from {@link obj}.
 */
function collectStrings(obj, strArr = []) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      if (typeof element === "string") {
        strArr.push(element)
      } else if (typeof element === 'object' && !Array.isArray(element)) {
        collectStrings(element, strArr)
      }
    }
  }
  return strArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
