"use strict";

function isValid(string) {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      stack.push("(");
      continue;
    }
    if (!stack.pop()) return false;
  }
  return stack.length === 0;
}

console.assert(isValid("") === true);
console.assert(isValid("()") === true);
console.assert(isValid("())") === false);
console.assert(isValid("()()") === true);
console.assert(isValid("((()))") === true);
console.assert(isValid("(()(()))))") === false);

function isValid2(string) {
  return string.split("").reduce(magicFunction);
}
