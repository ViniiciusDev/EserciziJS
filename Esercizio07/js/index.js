// TODO: Scrivi un programma che dato un numero intero compreso tra 1 e 7
// TODO: Visualizzi il corrispondente giorno della settimana. 

let dayWeek = parseInt(prompt("Metti un numero da 1 a 7: "));

switch(dayWeek)   {
   case 1:
      console.log("Oggi é Lunedi");
      break
   case 2:
      console.log("Oggi é Martedi");
      break
   case 3:
      console.log("Oggi é Mercoledi");
      break
   case 4:
      console.log("Oggi é Giovedi");
      break
   case 5:
      console.log("Oggi é Venerdi");
      break
   case 6:
      console.log("Oggi é Sabato");
      break
   case 7:
      console.log("Oggi é Domenica");
      break
   default:
      console.log("Il valore che hai messo non corrisponde a un giorno della settimana");
      break
}