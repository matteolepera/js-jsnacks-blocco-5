const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// let numsEven = nums.filter(function (number) {
//     return number % 2 === 0;
// });
// console.log(numsEven);

//arrow function
let numsEven = nums.filter((number) => number % 2 === 0);
console.log(numsEven);