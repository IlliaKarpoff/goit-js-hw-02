// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. 
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини)
//  і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

'use strict';
const calculateEngravingPrice = function (message, pricePerWord) {
  const array = message.split(' ');
  return array.length * pricePerWord;
};

// Виклич функції для перевірки працездатності твоєї реалізації.

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120