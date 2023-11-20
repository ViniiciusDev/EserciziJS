// TODO: Scrivi un programma che dato:
// TODO:    a) Un numero totale di gatti
// TODO:    b) Il numero dei gatti presenti in ogni fila
// TODO: Restituisca in output:
// TODO:     - Il  numero di file risultanti
// TODO:     - indicare il numero di gatti mancanti per completare una nuova fila */

let cats = parseInt(prompt("Numero totale di Gatti: "));
let catsRow = parseInt(prompt("Numero di gatti per fila: "));

let rows = Math.round(cats / catsRow);
// ? Verifica numero di file
/* console.log(rows); */ 
let missingCats = cats % catsRow;
// ? Verifica resto dei gatti che avanzano per completare la fila
/* console.log(missingCats); */
let completeRow = catsRow - missingCats;
// ? Verifica dei gatti che mancano per completare la fila
/* console.log(completeRow); */

console.log(`Abbiamo ${cats} gatti, ogni fila ha ${catsRow} gatti, e ne mancano ${completeRow} gatti per completare un'altra fila.`);