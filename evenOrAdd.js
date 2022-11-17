// let number=57;
// let remainder=number%2;
// console.log(remainder==0);


// Even num checking by function
function isEven(number){
    if(number % 2==0){
        return true;
    }
    return false;
}
let myNumber=5;
let isMyNumberEven=isEven(myNumber);
console.log("My number is",isMyNumberEven);

//odd num checking by function
function isOdd(number){
   if(number % 2 !=0){
    console.log("This is odd number");
   }
   return false;
}
let myAnotherNumber=333333;
let mynum2=isOdd(myAnotherNumber);
console.log("MY another number is:",mynum2);