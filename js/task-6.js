// Завдання 6
// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.

// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній,
// необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
// Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково.
// Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, cпробуйте ще раз',
// при цьому результат prompt записувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

'use strict';
const numbers = [];
let total = 0;
let input;
let message;

for (let i = 0; input !== null; i += 1) {
  input = prompt('Enter a number only!');
  
  if (input === null) {
    //     alert(`Canceled by user! 
    // Total amount is ${total}`);
    break;
  }

  if (Number.isNaN(Number(input))) {
    alert('This is not a number! Learn numbers please and try later.');
  } else {
    numbers.push(Number(input));
    total += Number(input);
  }
}

console.log(numbers);
console.log('Total amount is', total);