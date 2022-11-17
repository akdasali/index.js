function inchiToFeet(inches){
    let feet=inches/12;
    return feet;
}

let myInches=144;
var feet=inchiToFeet(myInches);
console.log("my inches is:",feet);

var dadiInches=178;
feet=inchiToFeet(dadiInches);
console.log("dadi's inches is: ",feet);

var naniInches=190;
feet=inchiToFeet(naniInches);
console.log("nani's inches is:",feet);

var auntInches=200;
feet=inchiToFeet(auntInches);
console.log("aunt's inches is:",feet);

//mile to kilometer
function mileToKilometer(miles){
    var km=miles*1.60934;
    return km;
}

var running=mileToKilometer(26.2);
console.log("Running in km is:",running,"km");
