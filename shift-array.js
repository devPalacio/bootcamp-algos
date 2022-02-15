/*
 * rotate: Given an array `arr` and an integer `k`, return an array which
 * is shifted to the right `k` times (left if `k` is negative).
 *
 * Signature: (arr = [Object], k = Number) -> Number
 *
 * Time/Space Complexity:
 * Quadratic:  O(n²)/O(1)
 * Linear:              O(n)/O(n)
 * Linear in-Place:     O(n)/O(1)
 *
 * Examples:
 * 1. rotate([1, 2, 3], 2) -> [2, 3, 1]
 * 2. rotate([1, 2, 3], -2) -> [3, 1, 2]
 * 3. rotate([1, 2], 6) -> [1, 2]
 *
 * Edge-cases:
 * 1. Empty arrays.
 * 2. k == zero.
 * 3. k > arr.length.
 */

function rotate(arr, k) {
  //shift index of elements by .length % k
  if (k < 0) {
    k = -(Math.abs(k) % arr.length) + arr.length;
  }
  if (k === 0) {
    return arr;
  }
  if (k > arr.length) {
    k = k % arr.length;
  }
  let shifted = [];
  for (let i = 0; i < arr.length; i++) {
    let newIndex = i + k;
    if (k + i > arr.length - 1) {
      newIndex = i + k - arr.length;
    }
    shifted[newIndex] = arr[i];
  }
  return shifted;
}
console.log("Begin Tests");
console.log(rotate([1, 2, 3, 4, 5], 0));
console.log(rotate([1, 2, 3, 4, 5], 1));
console.log(rotate([1, 2, 3, 4, 5], -1));
console.log(rotate([1, 2, 3, 4, 5], 6));
console.log(rotate([1, 2, 3, 4, 5], -6));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
