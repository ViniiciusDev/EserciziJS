// TODO: Scrivi un programma che dati:

// TODO: - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// TODO: - il tipo di operazione aritmetica da effettuare, una delle seguenti:

// TODO: addizione
// TODO: sottrazione
// TODO: moltiplicazione
// TODO: divisione

// TODO: Esegua il calcolo tra ogni elemento dei due array, salvando ciascun 
// TODO: risultato in un terzo array d’appoggio.

let firstArray = [];
let secondArray = [];

let resultArray = [];

for(let n = 1; n <= 10; n++)  {
   firstArray.push(Math.floor(Math.random() * (11 - 1) + 1));
}
console.log(firstArray);
for(let n = 1; n <= 10; n++)  {
   secondArray.push(Math.floor(Math.random() * (11 - 1) + 1));
}
console.log(secondArray);

function arraySum(firstArray, secondArray) {
   for(let i = 0; i < firstArray.length; i++)   {
      resultArray.push(firstArray[i] + secondArray[i]);
   } 
   return resultArray;
}

console.log(arraySum(firstArray, secondArray));