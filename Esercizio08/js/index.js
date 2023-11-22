// TODO: Scrivi un programma che converta un voto numerico (v) in un giudizio 
// TODO: seguendo questi parametri:
// TODO:    v < 18: insufficiente
// TODO:   18 <= v < 21: sufficiente
// TODO:   21 <= v < 24: buono
// TODO:   24 <= v < 27: distinto
// TODO:   27 <= v <= 29: ottimo
// TODO:   v = 30: eccellente

let vote = parseInt(prompt("Converti il tuo voto: "));

if (vote < 18) {
   console.log("insufficiente");
} else if (18 <= vote && vote < 21) {
   console.log("sufficiente");
} else if (21 <= vote && vote < 24) {
   console.log("buono");
} else if (24 <= vote && vote < 27) {
   console.log("distinto");
} else if (27 <= vote && vote < 29) {
   console.log("ottimo");
} else if (vote = 30)   {
   console.log("eccellente");
} else {
   console.log("Valore non valido.");
}