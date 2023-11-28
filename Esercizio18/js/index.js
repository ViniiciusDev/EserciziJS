// TODO: Crea um gioco che ritorni le seguenti condizioni:
// TODO: 1. Scegliere tra FrontEnd e BackEnd.
// TODO: - Se FrontEnd scegliere ReactJs o VueJs
// TODO: - Se BackEnd scegliere C# o Java
// TODO: 2. Chiedere se vuole specializzarsi in quel settore o diventare un fullstack.
// TODO: - in base alla sua scelta permettere all'user di scrivere tutti i linguaggi da studiare.

let follow = prompt('Vorresti diventare un FrontEnd o BackEnd Developer? ');

if (follow === 'FrontEnd') {
   console.log(`Ottimo ora che sappiamo che vuoi diventare un ${follow} Developer, devi scegliere un framework!!`);
   
   let framework = prompt('Sceglie un framework tra ReactJs e VueJs? ');
   if(framework === 'ReactJs')   {
      console.log(`Ottima scelta!! ${framework} é una libreria molto usata ai tempi di oggi.`);
   } else if (framework === 'VueJs')   {
      console.log(`Ottima scelta!! ${framework} é un'ottimo framework molto utilizzato.`);
   }

} else if (follow === 'BackEnd') {
   console.log(`Ottimo ora che sappiamo che vuoi diventare un ${follow} Developer, devi scegliere un linguaggio!!`);
   
   let linguaggio = prompt('Sceglie un linguaggio tra C# e Java? ');
   if(linguaggio === 'C#')   {
      console.log(`Ottima scelta!! ${linguaggio} é un linguaggio molto usato per video giochi.`);
   } else if (linguaggio === 'Java')   {
      console.log(`Ottima scelta!! ${linguaggio} é un linguaggio molto usato per la infrastruttura di grandi aziende.`);
   }
   
} else {
   console.log('Scelta non valida!!');
}