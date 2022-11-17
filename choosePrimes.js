// 1. Create an empty array for storing the prime numbers
// 2. Loop through nums array and check each number if they are prime, pushing/appending each prime number to the newNums array
// 3. Return the new array

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    let currentDivisor = i;

    if (number % currentDivisor === 0) {
      return false;
    }
  }
  
  return true;
}

function choosePrimes(nums) {
  const primeNums = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    if (isPrime(currentNumber)) {
      primeNums.push(currentNumber);
    }
  }

  return primeNums;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]