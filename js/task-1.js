// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента
//  масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const cats = ['Mango', 'Poly', 'Ajax'];
// const catNameToFind = prompt('введи имя кота');
// let message;

// for (const cat of cats) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * имеprompt('введи имя кота'клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (cat === catNameToFind) {
//     message = 'Кит с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = 'Кита с таким именем нету в базе данных!';
// }

// alert(message); // Клиент с таким именем есть в базе данных!

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   let total = 0;

//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//     for (let j = 0; j < matrix[i].length; j += 1) {
//       console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }

//   console.log('Summary', total); // 45
