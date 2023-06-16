//Creating pointers or values that correspond to an index
// or position and move towards the beginning, end,  or middle
// based on certain condition. It's very efficient for solving
// problem with minimal space complexity as well

//         Example 1
// Write a function called sumZero which accepts a sorted array of integers
// The function should find the first pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not exist

//  Naive approach
// Time complexity - O(N^2), Space complexity- O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j]);
        return [arr[i], arr[j]];
      }
    }
  }
}
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
