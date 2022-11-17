// function getFactorial(numbers){
//     let factorial=1;
//     let i=1;
//     while(i<=numbers){
//         factorial=factorial*i;
//         i++;
//     }
//     return factorial;
// }
// let myFactorial=getFactorial(4);
// console.log(myFactorial);

//while loop reverse factorial in function
// function getFactorial(numbers){
//     let factorial=1;
//     let i=numbers;
//     while(i>=1){
//         factorial=factorial*i;
//         i--;
//     }
//     return factorial;
// }
// let myFactorial2=getFactorial(3);
// console.log(myFactorial2);

// for loop reverse factorial in function
function getFactorial(num){
    let factorial=1;
    for( let i=num; i>=1; i--){
        factorial=factorial*i;
    }
    return factorial;
}
let myFactorial3=getFactorial(9);
console.log(myFactorial3);
