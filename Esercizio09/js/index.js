// TODO: Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
// TODO: Simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
// TODO: Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, 
// TODO: ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti 
// TODO: per calcolare il punteggio del giocatore. 

let throw1 = parseInt(prompt("Numero Tiri: "));
let throw2 = parseInt(prompt("Numero Tiri: "));

let player1 = 0;
let player2 = 0;

for (let t = 0; t < throw1; t++) {
   player1 = player1 + Math.floor(Math.random() * (6 - 1) + 1);
};
console.log(player1);

for (let t = 0; t < throw2; t++) {
   player2 = player2 + Math.floor(Math.random() * (6 - 1) + 1);
};
console.log(player2);

if(player1 > player2)   {
   console.log("Il Player1 ha vinto con: " + player1 + " punti");
} else if   ( player1 < player2 )   {
   console.log("Il Player2 ha vinto con: " + player2 + " punti");
} else if ( player1 === player2) {
   console.log("Abbiamo un pareggio: " + player1 + " " + player2);
} else  {
   console.log("Nessuno ha vinto.");
}