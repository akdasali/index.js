// var factorial= 1;
// for(var i=1; i<=5; i++){
    
//     factorial= factorial*i;
    
// }
// console.log(factorial);

// factorial in function
 function getFactorial(num){
    let factorial=1;
    for(let i=1; i<=num; i++){
        factorial=factorial * i;
    }
    return factorial;
}
let factorialOfSeven=getFactorial(7);
console.log("Factorial of 7 is: ",factorialOfSeven);

let factorialOfTen=getFactorial(10);
console.log("Factorial of 10 is: ",factorialOfTen);

