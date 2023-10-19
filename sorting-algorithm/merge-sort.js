function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}
const mergedResult = mergeSort([4, 3, 2, 10, 12, 1, 5, 6]);
console.log(mergedResult);

function merge(arr1, arr2) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      merged.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      merged.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < arr1.length) {
    merged.push(arr1[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < arr2.length) {
    merged.push(arr2[rightIndex]);
    rightIndex++;
  }

  return merged;
}
