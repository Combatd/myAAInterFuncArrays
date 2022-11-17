// 1. Create a variable to store the most vowels counter with initial value 0 as well as most Vowels Word as empty string
// 2. Split the string into an array separated by spaces
// 3. For each element of the array, count the number of vowels. If it has the greatest number of vowels of what we checked so far, update the most vowels variable.
// 4. return the most vowels variable.

const countVowels = word => {
  const vowels = 'aeiou';
  let vowelCount = 0;

  for (let letter of word) {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }
  
  return vowelCount;
} 

function mostVowels(sentence) {
  let mostVowelsCount = 0;
  let mostVowelsWord = '';

  const words = sentence.split(' ');
  for (let element of words) {
    if (countVowels(element) > mostVowelsCount) {
      mostVowelsCount = countVowels(element);
      mostVowelsWord = element;
    }
  }

  return mostVowelsWord;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"