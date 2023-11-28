// TODO: Programma dove l'user rispondi a delle domande.

let name = prompt("Qual'é il tuo nome? ");
let age = parseInt(prompt("Quanti anni hai? "));
let language = prompt("Quale Linguaggio di programmazione stai studiando? ");
let validation = parseInt(prompt("Ti piace Studiare il linguaggio ? 1 - SI e 2 - NO"));

console.log(`Salve ${name}, tu hai ${age} anni e stai imparando ${language}`);

if (validation === 1)   {
   console.log("Benissimo!! Continua a studiado e tu avrai molto successo.");
} else if (validation === 2)  {
   console.log("Prova a studiare altri linguaggi!!");
} else {
   console.log("Valore non valido..");
}
