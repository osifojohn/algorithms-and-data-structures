/// similar to bubble sort, but instead of first placing large values into sorted positon, it places small values into sorted position

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

selectionSort([2, 4, 1, 0, 6]);
// 0 4 1 2 6
// 0 1 4 2 6
// 0 1 2 4 6
// 0 1 2 4 6
// 0 1 2 4 6
