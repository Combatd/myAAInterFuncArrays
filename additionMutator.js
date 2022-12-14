/*
Write a function additionMutator that accepts an array and a number as an arguments.
The function should mutate the input array such that every element has the given number added to it.
*/

// 1. return empty array if it is empty
// 2. Create a loop that on each iteration will change each element to be itself plus the argument number
// 3. Return the mutated array with all the additions

function additionMutator(array, number) {
  if (array.length === 0) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + number; // we cant use a different variable where it doesn't point to the same element in the array
  }
  return array;
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]