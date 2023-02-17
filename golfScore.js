const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];  function golfScore(par, strokes) {  
  
  if(par === 1 || strokes === 1){
    return names[0];
  }
  else if(par === strokes ){
    return names[3];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if(strokes === par - 1){
    return names[2];
  }
  else if(strokes === par + 1){
    return names[4];
  }
  else if(strokes === par + 1 ){
    return names[4];
  }
  else if(strokes === par + 2){
    return names[5];
  }
  else if(strokes >= par + 3){
    return names[6];
  };
  
};
console.log(golfScore(4, 1)) //devrait renvoyer la chaîne "Hole-in-one!" 
console.log(golfScore(4, 2)) //devrait renvoyer la chaîne "Eagle" 
console.log(golfScore(5, 2)) //devrait renvoyer la chaîne "Aigle" 
console.log(golfScore(4, 3)) //devrait donner la chaîne "Birdie" 
console.log(golfScore(4, 4)) //devrait donner la chaîne "Par" 
console.log(golfScore(1, 1)) //devrait donner la chaîne "Hole-in-one!" 
console.log(golfScore(5, 5)) //devrait ret
module.exports = golfScore;