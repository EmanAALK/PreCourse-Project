/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers) {
  let x = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      x = numbers[i] + x;
    }
  }
  return x;
}
//________________________________________________________________________________________________________________
function characterCount(string, c) {
  string = string.toLowerCase();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === c) {
      count = count + 1;
    }
  }
  return count;
}
//________________________________________________________________________________________________________________
function differences(numbers) {
  let AD = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    AD.push(numbers[i + 1] - numbers[i]);
  }

  return AD;
}
//________________________________________________________________________________________________________________
function largestIncrement(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (result < numbers[i + 1] - numbers[i]) {
      result = numbers[i + 1] - numbers[i];
    }
  }
  return result;
}
//________________________________________________________________________________________________________________
/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {}

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {}

//________________________________________________________________________________________________________________
function isUpperCase(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) return true;
    else return false;
  }
}
//________________________________________________________________________________________________________________
function elementInArray(numbers, x) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) {
      return true;
    } else {
      return false;
    }
  }
}
//________________________________________________________________________________________________________________
function reverseString(string) {
  let RS = "";
  for (let i = string.length - 1; i >= 0; i--) {
    RS += string[i];
  }

  return RS;
}
//_________________________________________________________________________________________________________________
console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));
console.log(characterCount("Character Count is clever", "c"));
console.log(differences([11, 35, 52, 14, 56]));
console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));
// console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(abbreviate("miss", "Stephane"));
console.log(isUpperCase("JCREW"));
console.log(elementInArray([5, 8, 7], 8));
console.log(reverseString("CODED"));

module.exports = {
  sumOdds,
  characterCount,
  differences,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
  reverseString,
};
