//Ecrivez une fonction en JavaScript qui prend en entrée la longueur d'un côté d'un carré et calcule son périmètre et son aire. La fonction doit retourner un objet avec les propriétés "perimeter" et "area" qui contiennent les valeurs calculées. 
function squarePerimeter(c){
  let calculPerimeter = 4*c;
  let calculArea = c*c;
  console.log("Perimeter:", calculArea);
  console.log("Area:",calculPerimeter);
}
squarePerimeter(5)
module.exports = squarePerimeter;