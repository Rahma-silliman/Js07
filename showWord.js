// Écrire une fonction qui crée un tableau mots contenant les mots "Niger", "Niamey", "Sadore" et "Codeloccol" et qui affiche chaque élément du tableau à l'écran en utilisant une boucle for. 
function showWord(){
  mots = ["Niger", "Niamey", "Sadore", "codeloccol"];
  nomberElement = mots.length
  for(let i = 0; i < nomberElement; i++){
    console.log(mots[i])
  };
  return 
};
showWord();
module.exports = showWords;