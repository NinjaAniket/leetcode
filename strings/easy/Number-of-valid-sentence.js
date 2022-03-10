/**
 * @param {string[]} sentences
 * @return {number}
 */
//leetcode.com/problems/maximum-number-of-words-found-in-sentences/
https: var mostWordsFound = function (sentences) {
  const temp = [];
  let max = 0;

  for (let x of sentences) {
    const result = x.split(" ").length;
    temp.push(result);
  }

  for (let x of temp) {
    if (x > max) {
      max = x;
    }
  }

  return max;
};

mostWordsFound(["please wait", "continue to fight", "continue to win"]);
