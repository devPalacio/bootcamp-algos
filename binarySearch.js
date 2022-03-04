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
function binaryRecursion(left, right, arr, num) {
  console.log(left, right);
  // base case
  const mid = Math.floor((right + left) / 2);
  // check middle number and compare to target
  // if number to the right, discard left
  if (num === arr[left]) return left;
  if (num === arr[right]) return right;
  if (num === arr[mid]) return mid;
  if (left > right) return -1;
  if (num > arr[mid]) {
    return binaryRecursion(mid + 1, right, arr, num);
  }
  if (num < arr[mid]) {
    return binaryRecursion(left, mid - 1, arr, num);
  }
}
console.log(
  binaryRecursion(0, 9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8),
  "should return 8"
);

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
      mid = Math.floor((right - mid) / 2);
      continue;
    }
    if (arr[mid] > num) {
      //discard right, target is on the left
      right = mid;
      mid = Math.floor((mid - left) / 2);
    }
  }
}

// console.log(binarySearch([1, 2, 3], 2), 1);
// console.log(binarySearch([1, 2, 3], 8), -1);
