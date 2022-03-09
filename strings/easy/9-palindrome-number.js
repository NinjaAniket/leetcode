/**
 * @param {number} x
 * @return {boolean}
 */

//  https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  const reversedStr = x.toString().split("").reverse().join("");
  if (Number(reversedStr) === x) return true;
  return false;
};

isPalindrome(121);
