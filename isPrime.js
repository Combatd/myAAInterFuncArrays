// 1. Return false if the number passed in is less than 2, since 0, 1, and negative numbers are not prime

// 2. Loop from 2 to 1 less than the number, returning false if number divided by the iterations current number has remainder 0.

// 3. Return true after the loop ends and no other divisors are found

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

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true