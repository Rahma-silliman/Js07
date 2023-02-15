//une fonction qui Compte le nombre d'occurrences de la lettre 'a'  dans cette chaîne de caractères "Bonjour, chers candidat comment vous allez aujourd'hui" 
let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui"; 
 function countAcaracter(){
   var count = sentence.split('a').length - 1;
   return count
 };
console.log(countAcaracter());
module.exports = countAcaracter;