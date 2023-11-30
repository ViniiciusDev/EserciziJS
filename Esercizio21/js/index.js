//TODO: Scrivi una funzione che dato un numero intero conti da quante cifre è formato.

let num = parseInt(prompt("Dammi un numero intero: "));

function numCount(num) {
   let result = num.toString();
   return console.log(`Il valore passato ha un totale di ${result.length} cifre.`);
}

numCount(num);