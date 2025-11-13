const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array.
// Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.


// let zucchineDa15 = zucchine.filter(function (lunghezza) {
//   return lunghezza.length >= 15;
// })
// console.log(zucchineDa15);

// let zucchineMin15 = zucchine.filter(function (lunghezza) {
//   return lunghezza.length < 15;
// })
// console.log(zucchineMin15);

const zucchineDa15 = [];
const zucchineMin15 = [];

zucchine.forEach(function (lunghezza) {
  if (lunghezza.length >= 15) {
    zucchineDa15.push(lunghezza)
  } else {
    zucchineMin15.push(lunghezza);
  }
});
console.log(zucchineDa15, zucchineMin15);