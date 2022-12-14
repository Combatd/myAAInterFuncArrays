/*
Write a function reverseString(str) that takes in a string. 
The function should return a new string where the order of the characters is reversed.
*/

// 1. Initialize a new string to be an empty string (strings are immutable!)
// 2. Start from the end of the str argument, pushing each element/char into the new string
// 3. Once the loop completes, return the new string.

function reverseString(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]; // reversedString = reversedString + str[i]
  }
  return reversedString;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'