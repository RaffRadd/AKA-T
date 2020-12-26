function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  index = partition(arr, start, end);
  states[index] = -1;

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

function partition(arr, start, end) {
  for (i = start; i < end; i++) {
    states[i] = 1;
  }

  pivotValue = arr[end];
  pivotIndex = start;
  states[pivotIndex] = 0;
  for (i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  swap(arr, pivotIndex, end);

  for (i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}

function swap(arr, a, b) {
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}