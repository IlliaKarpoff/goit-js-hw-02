// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

'use strict';
const findLongestWord = function (string) {
  const array = string.split(' ');
        console.log(array);
        
        console.log(Math.max(for (let i = 0; i < array.length; i += 1) {
          array[i].length
        }));
          // console.log((array[i].length));
          let a[i] = Math.max(array[i].length);
          console.log(a[i])
          // console.log(Math.max(array[i].length));
          //     if (Math.max(array[i].length)) {
            // console.log(Math.max(array[i]));
            // console.log(array[i]);
//     }
  });
};

/*
* Виклич функції для перевірки працездатності твоєї реалізації.
*/
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// console.log (Math.max(100, 20, 30))