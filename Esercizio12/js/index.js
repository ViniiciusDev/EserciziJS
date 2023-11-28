// TODO: Calcola il valore del locale.
// TODO: m2 = 3.000
// TODO: 1 camera, m2 é 1x
// TODO: 2 camere, m2 é 1.2x
// TODO: 3 camera, m2 é 1.5x

let mQuadri = parseInt(prompt("Metri Quadri della casa: "));
let nStanze = parseInt(prompt("Numero di stanze: "));
let valueM2 = calcMetriQuadri(mQuadri, nStanze);

console.log(`La casa costa $${valueM2}`);

function calcMetriQuadri(valueMetri, valueStanze) {
   let m2 = 3000;
   let price = 0;

   switch (valueStanze) {
      case 1:
      default:
         price = valueMetri * m2;
         break;
      case 2:
         price = valueMetri * (m2 * 1.2);
         break;
      case 3:
         price = valueMetri * (m2 * 1.5);
         break;
   }

   return price;
}