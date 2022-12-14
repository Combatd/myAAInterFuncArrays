/*
Write a function alternatingWords that accepts an array of words as an argument. 
The function should mutate the input array such that the words alternate between fully uppercase or lowercase. 
The first word should be uppercase.
*/

// 1. Create a for loop that will be able to access each string element
// 2. For each element, if its index/location is even, make it upper case
// 3. For each element, if its index/location is odd, make it lower case
// 4. Return the array with all the strings mutated. 

function alternatingWords(wordsArray) {
  if (wordsArray.length === 0) {
    return wordsArray;
  }

  for (let i = 0; i < wordsArray.length; i++) {
    let indexOfWordIsEven = i % 2 === 0;
    if (indexOfWordIsEven) {
      wordsArray[i] = wordsArray[i].toUpperCase();
    } else {
      wordsArray[i] = wordsArray[i].toLowerCase();
    }
  }
  return wordsArray;
}

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]