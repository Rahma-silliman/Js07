// Ecrire une fonction permettant de Remplacer toutes les occurrences d'une sous-chaîne dans une chaîne de caractères par une autre souschaîne  • La fonction te permettra de remplacer la sous-chaine "est" par la souschaine "étais"    let exemple = ‘’ceci est une phrase’’ 

function replaceString(a,b){
  let sentence = "ceci est une phase"
 sentence = sentence.replace(a,b);
  return sentence
 
};
console.log(replaceString('est','était'));
module.exports = replaceString;

