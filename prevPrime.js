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

// 1. Create a loop starting with the previous number before the number argument
// 2. In each decrement, check each number if it is prime.
// 3. Return the prime number if it is found.
// 4. If not found, return null outside the loop.

function prevPrime(number) {
  let index = number - 1;
  while (index > 2) {
    let currentNumber = index;
    if (isPrime(currentNumber)) return currentNumber;
    index--;
  }
  return null; // if no number is nt found
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null