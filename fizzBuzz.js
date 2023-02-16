//Ecrivez une fonction JavaScript qui itère les entiers de 1 à 100. Mais pour les multiples de trois, imprimez "Fizz" à la place du nombre et pour les multiples de cinq, imprimez "Buzz". Pour les nombres qui sont des multiples de trois et de cinq, imprimez "FizzBuzz". 
function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if(Number.isInteger(i / 15)){
    console.log('fizzBuzz');
    }
    else if(Number.isInteger(i / 5)){
      console.log('Buzz')
    }
    else if (Number.isInteger(i / 3)){
      console.log('Fizz');
    }
    else{
      console.log(i);
    }
} ;
  
};
fizzBuzz();
module.exports = fizzBuzz