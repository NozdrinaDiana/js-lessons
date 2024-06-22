function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let maxNumber;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (array[i] > array[j]) {
        maxNumber = array[i];
        array[i] = array[j];
        array[j] = maxNumber;
      }
    }
  }
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let minNumber;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (array[i] < array[j]) {
        minNumber = array[i];
        array[i] = array[j];
        array[j] = minNumber;
      }
    }
  }
  return array;
}
console.log(sortAsc([5, 8, 1, -3, 0, 5, 2, 9]));
console.log(sortDesc([5, 8, 1, -3, 0, 5, 2, 9]));
console.log(sortAsc((25, 15, 222, 1)));
console.log(sortDesc((25, 15, 222, 1)));
