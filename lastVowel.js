// 1. Create a vowels string to check and compare characters to
// 2. Create a reverse loop on str that will check each character if they are a vowel
// 3. Return the character in the iteration of the loop if its a vowel
// 4. Return null if not found after the loop


function lastVowel(str) {
  let vowels = 'aeiou';
  for (let i = str.length - 1; i > 0; i--) {
    let currentCharacter = str[i];
    if (vowels.includes(currentCharacter.toLowerCase())) {
      return currentCharacter;
    }
  }
  return null;
}



console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null