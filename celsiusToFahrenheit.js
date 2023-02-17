// Convertir un nombre de degrés Celsius en Fahrenheit  • formule : °F =( °C x 1,8 ) + 32 
function celsiusToFahrenheit(C){
  let F = (C*1.8) + 32;
  return F
};
console.log(celsiusToFahrenheit(50));
module.exports = celsiusToFahrenheit;