// Écrire une fonction qui calcule le factoriel d'un nombre (le produit de tous les nombres entiers de 1 à ce nombre). • 1 < n   
function factoriel(n){
  let calculFactoriel = 1;
  for(let i = 1; i <= n; i++){
   calculFactoriel *= i;
  };
  return calculFactoriel;
};
console.log(factoriel(6));
module.exports = factorial;