/*
 * binarySearch: Given an array of integers `nums` which is sorted in ascending
 * order, and an integer `target`, return the index of `target` in `nums`, or -1
 * if it does not exist.
 *
 * Signature: (nums = [Number], target = Number) -> Number
 *
 * Examples:
 * binarySearch([1, 2, 3], 2) = 1
 * binarySearch([1, 2, 3], 8) = -1
 *
 * Hints:
 * 1. How can you take advantage of the fact that the array is sorted to speed
 * up the search?
 */

function binarySearch(arr, num) {
  let right = arr.length - 1;
  let left = 0;
  let mid = Math.floor((right - left) / 2);
  if (arr[right] === num) {
    return right;
  }
  if (arr[left] === num) {
    return left;
  }
  if (num < arr[left] || num > arr[right]) {
    return -1;
  }

  while (left <= right) {
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] < num) {
      // discard the left, target is on the right
      left = mid;
      mid = mid + Math.floor((right - mid) / 2);
      continue;
    }
    if (arr[mid] > num) {
      //discard right, target is on the left
      right = mid;
      mid = mid - Math.floor((mid - left) / 2);
    }
  }
}

console.log(binarySearch([1, 2, 3], 2), 1);
console.log(binarySearch([1, 2, 3], 8), -1);
