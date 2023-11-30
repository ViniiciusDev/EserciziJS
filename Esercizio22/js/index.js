// TODO: Scrivi due funzioni una che prenda in input un array di numeri 
// TODO: e restituisca il maggiore, l'altra che restituisca il minore.

let numbers =[10, -4, -3, 22, 30, 1, 0];

function bigNumber(numbers) {
   let result = Math.max(...numbers);
   return(result);
}

function smallNumber(numbers) {
   let result = Math.min(...numbers);
   return(result);
}

console.log(`Il valore più alto é: ${bigNumber(numbers)} e il valore più basso é: ${smallNumber(numbers)}`);