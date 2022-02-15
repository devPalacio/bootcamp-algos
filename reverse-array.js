'use strict';
function reverseArray(arr){
    var halfLength = Math.floor(arr.length/2);
    for (let i = 0; i < halfLength; i += 1){
      var temp = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = temp;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4]));
console.log(reverseArray([1,2,3]));
console.log(reverseArray([1,2,3,4,5,6,7,8]));
