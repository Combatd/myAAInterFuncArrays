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

// 1. Create a loop starting with the next number after the number argument
// 2. In each iteration, check each number if it is prime.
// 3. Return the prime number if it is found.

function nextPrime(number) {
  let index = number + 1;
  while (index) {
    let currentNumber = index;
    if (isPrime(currentNumber)) return currentNumber;
    index++;
  }
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101