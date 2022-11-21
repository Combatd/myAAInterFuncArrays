function hasDoubleLetter(str) {
  if (typeof(str) !== 'string') {
    return null;
  }
  let index = 0;
  while (index < str.length - 1) {
    let currentCharacter = str[index];
    if (currentCharacter === str[index + 1]) {
      return true;
    }
    index++;
  }
  return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null