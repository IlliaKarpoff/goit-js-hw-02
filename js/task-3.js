// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

'use strict';
const findLongestWord = function (string) {
  let maxLength = 0;
  let longestWord;
  let i = 1;
  const array = string.split(' ');
  console.log(array);

  for (i = 0; i < array.length; i += 1) {
    if (maxLength < array[i].length) {
      maxLength = array[i].length;
      longestWord = array[i];
    } else {
    continue;
    }
  }
  console.log('maxLength', maxLength);
  return longestWord;
}

// Виклич функції для перевірки працездатності твоєї реалізації.

console.log('longestWord:', findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log('longestWord:', findLongestWord('Google do a roll')); // 'Google'

console.log('longestWord:', findLongestWord('May the force be with you')); // 'force'