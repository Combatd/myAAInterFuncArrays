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

const isFactor = (base, otherNumber) => {
  return base % otherNumber === 0;
}

// 1. Create an empty array to store prime factors
// 2. Create a loop that will iterate from 2 up to the number itself
// 3. In each iteration of the loop, check if the current number is prime and a factor and push into array if both conditions true
// 4. Return the array of prime factors

function primeFactors(number) {
  const primeFactors = [];

  for (let i = 0; i <= number; i++) {
    let currentNumber = i;
    if (isPrime(i) && isFactor(number, currentNumber)) {
      primeFactors.push(currentNumber);
    }
  }
  
  return primeFactors;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]