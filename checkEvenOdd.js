// Écrire une fonction qui prend en paramètre un nombre et qui renvoie "pair" si le nombre est pair ou "impair" s'il est impair. 
function checkEvenOdd(a,b){
 if(a%2 != 0 ){
   return 'Impair'
 }
 else {
   return 'Pair'
 }
};
console.log(checkEvenOdd(1));
console.log(checkEvenOdd(2));
module.exports = checkEvenOdd;
