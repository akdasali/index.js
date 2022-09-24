// function newPhone(){
//     console.log("room theke ber hoye bajar a gelam");
//     console.log("bazar a gia phone kinlam");
//     console.log("tarpron notun phone pelam");
// }
// newPhone();

function bringMangoes(taka){
    console.log("Khirsapat mango mon proti ", taka);
    console.log("Fajli mango khete khub misty ");
    let mangoPrice=25;
    let mangoQuantity=taka/mangoPrice;
    return mangoQuantity;

}  
let money=3500;
let mango=bringMangoes(money);
console.log("Ai nen mango ",mango,"taka kore aktar dam");
