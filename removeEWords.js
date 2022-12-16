/*
Write a function removeEWords(sentence) that accepts a sentence string as an arg. 
The function should return a new string, containing only the words that don't have the letter "e" in them.
*/

// 1. Split the string by spaces into an array
// 2. Loop through the array, only pushing non-e words into a new string followed by space
// 3. Return our new string

function removeEWords(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) {
    return false;
  }

  let sentenceArray = sentence.split(' ');
  let newSentence = '';

  for (let i = 0; i < sentenceArray.length; i++) {
    if (!sentenceArray[i].includes('e')) {
      newSentence += sentenceArray[i] + ' ';
    }
  }
  return newSentence;
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'