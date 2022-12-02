/*
Write a function reverb that accepts a word as an argument. 
The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. 
If the value passed in is not a string, say someone passes in a number as an argument, then return null.
*/

// 1. check type of word argument being passed in, return null if not string
// 2. declare vowels string to compare letters against
// 3. declare a variable to track the last found vowel
// 3. looping through a copy array of the word, check for last found vowel
// 4. make a copy of the last vowel and letters after ot ti join into the new word
// 5. after checking each letter, return the new word 

function reverb(word) {
  if (typeof(word) !== 'string') return null;

  const vowels = 'aeiouAEIOU';
  let newWordArr = word.slice(0).split('');
  let lastVowelIndex = 0;

  for (let i = 0; i < newWordArr.length; i++) {
    let currentChar = newWordArr[i];
    let laterVowelFound = vowels.includes(currentChar);
    if (laterVowelFound) {
      lastVowelIndex = i;
    }
  }
  let lastLetters = newWordArr.slice(lastVowelIndex);
  newWordArr = newWordArr.concat(lastLetters);
  
  return newWordArr.join('');
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null