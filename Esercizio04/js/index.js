// TODO: Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
// TODO: - l'età della persona,
// TODO: - quanti anni sono necessari per raggiungere i 100
// TODO: Restituisca in output entrambi i risultati.

let currentYear = 2023;
let birthYear = parseInt(prompt("Dammi la tua data di nascita: ")); 
let age = currentYear - birthYear;
let hundredYear = 100 - age;

// ? Verifica della data di nascita.
/* console.log(age); */
// ? Risultato della verifica.
console.log(`Sei nato nel ${birthYear} e hai ${age} anni, per raggiungere i 100 anni te ne mancano ${hundredYear} anni`);