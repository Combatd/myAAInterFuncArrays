/*
Write a function avgVal(arr) that accepts an array as an arg. 
The function should return the average of all values in the array. 
If the array is empty, it should return null.
*/

// The average should be sum of all numbers divided by length of array

// 1. Check if the array is empty, return null if it is
// 2. Loop through each element and add up to a sum saved to a variable
// 3. Divide the sum by the length of the array

const avgVal = (arr) => {
  const numberOfValues = arr.length;
  let sum = 0; // initialize with nothing

  if (numberOfValues === 0) {
    return null;
  }

  for (let i = 0; i < numberOfValues; i++) {
    sum = sum + arr[i];
  }

  let average = sum / numberOfValues;
  return average;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null