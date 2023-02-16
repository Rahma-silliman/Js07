 //‘’Voici l'exemple de la chaines",ecrivez une fonction qui Extrait les mots de cette phrase et les met dans un tableau nommé container. 
 
 var str = "Voici, l'exemple, de, la, chaines";
 function extractWords(){
  var container = str.split(', ');
   return container;
 };
 console.log(extractWords());
 module.exports = extractWords;