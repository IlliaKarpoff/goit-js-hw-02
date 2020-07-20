// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message - рядок. 
// Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, 
// то функція повертає true, якщо заборонених слів немає функція повертає false. 
// Слова в рядку можуть бути в довільному регістрі.

'use strict';
const checkForSpam = function (message) {
  const checkText = message.toLowerCase();
  return (checkText.includes('spam') || checkText.includes('sale'));
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest in  technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
