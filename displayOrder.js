// Ecrire une fonction pour Trier le tableau suivant de nombres par ordre croissant et puis affichez l’ordre.   
const numbers = [5, 2, 9, 1, 3];
function displayOrder(){
  numbers.sort();
  console.log(numbers);
};
displayOrder();
module.exports = displayOrder;
