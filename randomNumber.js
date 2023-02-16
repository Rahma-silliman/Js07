// Écrire une fonction qui génère et retourne un nombre aléatoire entre 1 et 10 
function randomNumber(){
var min=1; 
var max=10;  
var random = Math.floor(Math.random()*(max - min)) + min; 
return random;
};
console.log(randomNumber());
module.exports = randomNumber;