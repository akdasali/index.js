//Celsius to Fahrenheit

function getCelToFahrenheit(celsius){
    let Fahrenheit=(celsius*9/5)+32;
    return Fahrenheit;
}
let myCel=getCelToFahrenheit(32);
console.log("Celsius to Fahrenheit is:",myCel);