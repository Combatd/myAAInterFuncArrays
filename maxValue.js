// The nums array is unordered, so we have to loop through the entire array and check each number value

// 1. Declare a variable to store the largest number, with value null
// 2. Create a loop to check each number in array, and update if a larger number is found
// 3. Return the largest number variable
function maxValue(nums) {
  let largestNumber = null;

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];

    if (currentNumber > largestNumber || largestNumber === null) {
      largestNumber = currentNumber;
    }
  }

  return largestNumber;
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null