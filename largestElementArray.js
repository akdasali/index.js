
// Find largest element of array and sum of array by function

// function largestElement(numbers){
//     let largest=0;
//     let sum=0;
//     for(let i=0; i<numbers.length; i++){
//         console.log(numbers[i]);
//         let element=numbers[i];
//         sum=sum+element;
       
//         if(element<largest)
//         largest=element;
//     }
//     console.log("Addition of aray is:",sum);
//     return sum, largest;
// } 


// let ages=[10,40,30,20,60];
// let largest=largestElement(ages);
// console.log("Largest elemennt of array is :",largest);


// find largest value from negative value in array by function
// function largestElement(numbers){
//     let largest=numbers[0];//array er moddhe Ist j element ta ache seta
 
//     for(let i=0; i<numbers.length; i++){
//         console.log(numbers[i]);
//         let element=numbers[i];
//         if(element>largest)
//         largest=element;
//     }
//     return largest;
// } 

// let largest2=largestElement([-10,-3,-15,-2]);

// console.log("Largest elemennt of array2 is :",largest2);

//find the lowest value from in an array by function
function lowestElement(numbers){
    let lowest=numbers[0];
 
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
        let element=numbers[i];
       
       
        if(element<lowest)
        lowest=element;
    }
    
    return lowest;
} 


let ages=[10,40,-1,20,60];
let lowest=lowestElement(ages);
console.log("Lowest elemennt of array is :",lowest);