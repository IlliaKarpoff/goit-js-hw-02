// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

'use strict';
const findLongestWord = function (string) {
  const array = string.split(' ');
  console.log(array);
  let longestWord = array[0];
  
  for (let i = 1; i < array.length; i += 1) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  console.log('maxLength', longestWord.length);
  return longestWord;
}

// Виклич функції для перевірки працездатності твоєї реалізації.

console.log('longestWord:', findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log('longestWord:', findLongestWord('Google do a roll')); // 'Google'

console.log('longestWord:', findLongestWord('May the force be with you')); // 'force'