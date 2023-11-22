// TODO: Scrivi un programma che dati sette valori relativi alle temperature della settimana
// TODO: Stabilisca la giornata più calda e quella più fredda. 

let monday = parseFloat(prompt("Inserisci la temperatura di Lunedi: "));
let tuesday = parseFloat(prompt("Inserisci la temperatura di Martedi: "));
let wednesday = parseFloat(prompt("Inserisci la temperatura di Mercoledi: "));
let thursday = parseFloat(prompt("Inserisci la temperatura di Giovedi: "));
let friday = parseFloat(prompt("Inserisci la temperatura di Venerdi: "));
let saturday = parseFloat(prompt("Inserisci la temperatura di Sabato: "));
let sunday = parseFloat(prompt("Inserisci la temperatura di Domenica: "));

let hottestDay = Math.max(monday,tuesday,wednesday,thursday,friday,saturday,sunday);
let coldestDay = Math.min(monday,tuesday,wednesday,thursday,friday,saturday,sunday);

console.log(`La temperatura massima registrata nella settimana è di ${hottestDay}°C mentre la temperatura minima è di ${coldestDay}°C.`);