// TODO: Calcola il porcentaggio tra 2 numeri.


let price = parseInt(prompt("Il valore del prodotto: "));
let descount = parseInt(prompt("Il valore dello sconto: "));
let pct = descountCalculate(price, descount);

function descountCalculate(value, valuedescount)  {
   return (valuedescount / value) * 100;
}

console.log(`${pct}% de $${price} é $${descount}`);
