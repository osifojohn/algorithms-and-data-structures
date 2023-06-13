// This patterns uses objects or sets to collect values/frequencies
//  of values. This often avoid the need for nested loops or 0(N^2)
// with arrays / strings

// ///////Example 1
// Write a function called same, which accepts two arrays. The function
// should return true if the value in the array has it's corresponding value
// squared in the second array. The freq of value must be the same.
// same([1, 2, 3], [4, 1, 9]) //(true) same([1, 2, 3], [1,9]) //(true)
// same([1, 2, 1], [4, 4, 1]) //(false) (must be same freq)

/// Naive approach  0(N^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) return false;
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// same([2, 3, 4, 6], [4, 9, 16, 32]);

//// A better approach 0(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      console.log('false');
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
}
same([1, 2, 1], [4, 4, 1]);
