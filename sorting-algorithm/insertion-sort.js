// It builds up the sort by gradually creating a larger left half which is always sorted by inseting one item at a time in the correct place

/// taking one element at a time and placing it in the correct spot
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     let j = i - 1;
//     for (j; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//       console.log(arr, i, j);
//     }
//     arr[j + 1] = currentVal;
//   }
//   // return arr;
// }
// console.log(insertionSort([2, 1, 5, 3, 6, 4]));

// 2 1 5 3 6 4
// 1 2 5 3 6 4
// 1 2 5 3 6 4
// 1 2 3 5 6 4
// 1 2 3 4 5 6
