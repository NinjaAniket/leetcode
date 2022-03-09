// https://leetcode.com/problems/backspace-string-compare/
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

function handleCompare(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "#") {
      result.push(str[i]);
    } else {
      result.pop(str[i]);
    }
  }

  return result;
}

var backspaceCompare = function (s, t) {
  const firstStr = handleCompare(s);
  const secondStr = handleCompare(t);

  if (firstStr.join("") !== secondStr.join("")) return false;

  const temp = `"${firstStr.join("")}"`;

  return temp;
};

backspaceCompare("ab#c", "ad#c");
backspaceCompare("ab##", "c#d#");
backspaceCompare("a#c", "b");
