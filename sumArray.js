// let numbers=[10,20,30,40,50];
// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     let element=(numbers[i]);
//     console.log(element);
//     sum=sum+element;
   
// }
// console.log("Sum of array is: ",sum);


// sum of array by function
function sumOfArray(numbers){
    let sum=0;
    for(let j=0; j<numbers.length; j++){
         let allElement=numbers[j];
         sum=sum+allElement;
         console.log(sum);
    }
    return sum;
}

let arraySum=sumOfArray([10,20,30,40]);
console.log("Sum of array is:",arraySum);