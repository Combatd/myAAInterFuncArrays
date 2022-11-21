// 1. Create a string of vowels
// 2. Loop through string checking if it matches a character in vowels
// 3. Return that character if found
// 4. Return null if the loop completes without finding a vowel in the string

function firstVowel(str) {
  const vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    let currentCharacter = str[i];
    if (vowels.includes(currentCharacter)) {
      return currentCharacter;
    }
  }
  return null;
}



console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null