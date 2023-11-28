//TODO: Scrivi un programma che stampi i numeri da 1 a 100 andando a capo ogni 10.

let space = '';
let number = 1;
while (number <= 100) {
   space = space + number + " ";
   if (number % 10 == 0)   {
      space = space + "\n";
   }
   number++
}
console.log(space);