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

const countFactors = (number) => {
  let totalFactors = 0;
  for (let i = 0; i <= number; i++) {
    let currentNumber = i;
    if (isFactor(number, currentNumber)) {
      totalFactors++;
    }
  }
  return totalFactors;
}

// 1. Declare a counter variable for counting factors/divisors, and for greatest factors found of a lesser positive number
// 2. Check if the number argument is prime or negative, return false if either condition is met
// 3. Loop from 2 to number and check if they are a factor.
// 4. In each iteration, check if the number is a factor and add to the divisor counter by 1 if it is true.
// 5. In the same loop, check each positive number less than the number argument for their total factors, storing the number of factors from the one with the most factors.
// 6. Return boolean for whether or not the factor counter value is greater than any lesser numbers most factors.

function isAntiPrime(number) {
  let totalFactors = 0;
  let previousMostFactors = 0;

  if (isPrime(number) || number < 0) {
    return false;
  }

  totalFactors = countFactors(number); // one loop

  for (let i = 0; i < number; i++) {
    let currentNumberFactors = countFactors(i);
    if (currentNumberFactors > previousMostFactors) {
      previousMostFactors = currentNumberFactors;
    }
  }

  return totalFactors > previousMostFactors;
}

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false