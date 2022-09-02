let myBudget=540;
let lacchiPrice=400;
let biryaniPrice=250;
let kacchiPrice=200;
let expireDate=true;
// let totalCost=lacchiPrice + biryaniPrice + kacchiPrice;
// console.log(totalCost);

// if(totalCost < myBudget){
//     console.log(" I will go out for eating ");
// }
// else{
//     console.log("I will not go out for eating ");
// }


// if(lacchiPrice < myBudget){
//     console.log("I will go to the lacchis's Shop");
// }
// else if(biryaniPrice < myBudget){
//     console.log("I will go to the biriyani's Shop");
// }
// else if(kacchiPrice < myBudget){
//     console.log("I will go to the kacchis's Shop");
// }
// else{
//   console.log("I will not go to outside for eating");
// }

// nested if 
if(myBudget > lacchiPrice){
    if(expireDate==false){
        console.log("I will eat ");
    }
    else{
        console.log(" I will not eat ");
    }
}
