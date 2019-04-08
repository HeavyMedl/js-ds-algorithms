/**
 * Write a function called `stringifyNumbers` which takes 
 * in an object and finds all of the values which are numbers and converts them 
 * to strings. Recursion would be a great way to solve this!
 *
 * @param {Object} obj
 * @returns {Object} The {@link obj} whose numbers are stringified
 */
function stringifyNumbers(obj) {
  let resultObj = {};
  for (const key in obj) {
    const element = obj[key];
    if (obj.hasOwnProperty(key)) {
      if (typeof element === "number") {
        resultObj[key] = element.toString();
      } else if (typeof element === "object" && !Array.isArray(element)) {
        resultObj[key] = stringifyNumbers(element);
      } else {
        resultObj[key] = element;
      }
    } else {
      resultObj[key] = element;
    }
  }
  return resultObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}


console.log(JSON.stringify(stringifyNumbers(obj), null, 2))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
