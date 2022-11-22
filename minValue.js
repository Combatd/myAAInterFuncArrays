// 1. Declare a variable to store smallest number with initial value of first element
// 2. Loop through the array of numbers, checking each number against the smallestNumber variable
// 3. If the loop iteration's current number is less tha nsmallest number variable value, reassign it as new smallest number
// 4. Return the smallest variable

function minValue(nums) {
  if (nums.length < 1) {
    return null;
  }

  let smallestNumber = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let currentNumber = nums[i];
    if (currentNumber < smallestNumber) {
      smallestNumber = currentNumber;
    }
  }
  return smallestNumber;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null