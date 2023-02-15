// Ecrire une fonction qui affiche 'Negatif' ou 'Positif' selon le signe de l'entier entré en paramètre. En tant que paramètre Si n est négatif, l'affichage est 'Negatif'. Si n est positif ou nul, l'affichage est 'Positif'. 
function checkSign(n){
  if (n <  0){
   return 'Negatif';
  }
  else {
    return 'Positif';
  
  }
};
console.log(checkSign(-2));
console.log(checkSign(4));
console.log(checkSign(0));
module.exports = checkSign;