// Створіть масив з числовими значеннями. Наприклад [23, 535, 23, 123, 18, 174, 304]. Напишіть програму, яка обчислить суму всіх елементів у цьому масиві за допомогою циклу for.

let list = [23, 535, 23, 123, 18, 174, 304];
let sum = 0;

for (let i = 0; i < list.length; i++) {
  sum += list[i];
}

console.log(sum);
