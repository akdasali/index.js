
function fibonacci(num){
    if(typeof num !="number"){
        return "Please give a number";
    }
    else if(num<2){
        return "Please enter the positive number greater than 1";
    }
    let fibo=[0,1];
    for(let i=2; i<=num; i++){
        fibo[i]=fibo[i-1]+[i-2];
    }
    return fibo;
}
let getFibo= fibonacci(-22);
console.log(getFibo);

// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"))

// var sentence = "I am hardworking. I am determined. I will be a web developer.";
// var count = 0;
// for(var i = 0; i < sentence.length; i++){
//   var letter = sentence[i];
//   if(letter=="a"){
//     count++;
//   }
// }
// console.log(count)