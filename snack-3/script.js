const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// let numbersAdd1 = numbers.map(function (element) {
//     return element + 1;
// })
// console.log(numbersAdd1);

//arrow function
let numbersAdd1 = numbers.map((element) => element + 1);
console.log(numbersAdd1);