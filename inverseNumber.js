// Écrire une fonction qui prend en paramètre un nombre et qui renvoie son inverse. 0 n’a pas d’inverse. 
function inverseNumber(a){
  if(a != 0){
    return 1 / a;
  }
  else {
    return "0 n'a pas d'inverse";
  };
};
console.log(inverseNumber(4));
console.log(inverseNumber(0));
module.exports = inverseNumber;