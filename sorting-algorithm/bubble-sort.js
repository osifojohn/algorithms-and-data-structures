/// A sorting algorithm where the largest values bubble up to the top

// function swap(arr, idx1, idx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(bubbleSort([5, 6, 3, 4, 2, 9]));
// 5 3 4 2 6 9
// 3 4 2 5 6 9
// 3 2 4 5 6 9
// 2 3 4 5 6 9
// 2 3 4 5 6 9
