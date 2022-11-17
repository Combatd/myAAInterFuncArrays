// 1. Declare a variable to store half the sum of all elements in the array
// 2. For loop to get the sum of all elements in the array divided by 2.
// 3. For loop again to try and find an element in the array equal to the half of the sum.
// 4. Return that element, or return null if not found after loop is finished

const halfSumOfAllElements = numbers => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum / 2;
}

function allElseEqual(arr) {
  let halfSum = 0;
  
  halfSum = halfSumOfAllElements(arr); // for of loop
  for (let number of arr) {
    if (number === halfSum) {
      return number;
    }
  }

  return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null