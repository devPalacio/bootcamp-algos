"use strict";
function convert(string) {
  const RE = /^(1[0-2]|0?[1-9]):([0-5][0-9])( ?[ap]m)$/;

  return string.replace(RE, civToMil);

  function civToMil(_, p1, p2, p3) {
    if (p1 === "12" && p3 === "am") {
      p1 = "00";
      return p1 + p2;
    }
    if (p1 === "12" && p3 === "pm") {
      p1 = "12";
      return p1 + p2;
    }
    if (p3 === "pm") {
      p1 = (parseInt(p1) + 12).toString();
    }
    if (p1.length !== 2) {
      p1 = "0" + p1;
    }
    return p1 + p2;
  }
}

console.log(convert("9:05am"), "9:05am");
console.log(convert("9:05pm"), "9:05pm");
console.log(convert("12:05am"), "12:05am");
console.log(convert("12:05pm"), "12:05pm");
