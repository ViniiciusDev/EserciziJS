// TODO: Scrivi un programma che dati 5 numeri restituisca la somma e la média.

let value1 = parseInt(prompt("Inserisci il primo valore: "));
let value2 = parseInt(prompt("Inserisci il secondo valore: "));
let value3 = parseInt(prompt("Inserisci il terzo valore: "));
let value4 = parseInt(prompt("Inserisci il quarto valore: "));
let value5 = parseInt(prompt("Inserisci il quinto valore: "));

let sumValue = value1 + value2 + value3 + value4 + value5;
console.log(`Il valore delle somme é: ${sumValue}`);

let mediaValue = sumValue / 5;
console.log(`La média delle somme é: ${mediaValue}`);