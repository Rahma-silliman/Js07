// Écrire un programme qui prend en paramètre un nombre de 1 à 10 et qui affiche "faible" si le nombre est inférieur à 5, "moyen" s'il est égal à 5 ou 6
for(let n = 1; n <= 10; n++);
function checkNumber(n){
  if(n < 5){
    return 'Faible';
  }
  else if( n === 5 || n === 6){
    return 'Moyen'
  }
  
};
console.log(checkNumber(4));
console.log(checkNumber(5));
console.log(checkNumber(6));
module.exports = checkNumber; 
