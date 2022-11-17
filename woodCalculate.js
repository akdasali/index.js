
function woodcalculate(warDrobeQuantity,bedQuantity,tableQuantity){
    let perWarDrobeWood=70;
    let perBedWood=60;
    let perTableWood=20;

    let warDrobeWoodQuantity=warDrobeQuantity*perWarDrobeWood;
    let bedWoodQuantity=bedQuantity*perBedWood;
    let tableWoodQuantity=tableQuantity*perTableWood;

    let totalWoodQuantity=warDrobeWoodQuantity+bedWoodQuantity+tableWoodQuantity;
    return totalWoodQuantity;



}
let firstOption=woodcalculate(1,1,1);
console.log(firstOption);
