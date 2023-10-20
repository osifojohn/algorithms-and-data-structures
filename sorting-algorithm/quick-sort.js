// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Find the pivot element such that all elements to the left are smaller, and all to the right are greater
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the elements before and after the pivot
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  // Select the rightmost element as the pivot
  const pivot = arr[high];
  let i = low - 1; // Index of the smaller element

  for (let j = low; j <= high - 1; j++) {
    // If the current element is smaller than or equal to the pivot
    if (arr[j] <= pivot) {
      i++;
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap arr[i+1] and arr[high] (pivot)
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

// Example usage:
const unsortedArray = [5, 2, 9, 3, 4, 6, 8, 1, 7];
quickSort(unsortedArray);
console.log(unsortedArray);
