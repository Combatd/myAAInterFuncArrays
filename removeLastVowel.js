/*
Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
*/

// 1. Create a string to hold vowels to compare to
// 2. Create a loop to find the last vowel to remove and store its index in a variable
// 3. Use slice to take two halves before and after the vowel location
// 4. Return the string

function removeLastVowel(word) {
  const vowels = 'aeiou';
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      word = word.slice(0, i) + word.slice(i + 1); // slice excludes the end
      break;
    }
  }
  return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'