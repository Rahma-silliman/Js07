// Écrire une fonction qui crée un tableau notes contenant les notes 20, 12, 8 et 9 et qui calcule et affiche la moyenne des notes du tableau. 

 function average(){
   const notes = [20, 12, 8, 9];
   numberElement = notes.length;
   var sum = 0;
   for(let i =0; i < numberElement; i++){
     sum = sum + notes[i];
     moyenne = sum / numberElement;
   }
   return moyenne;
 };
 console.log(average());
 module.exports = average;
 
 