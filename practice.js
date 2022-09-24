
let mobilePhone=['iphone','samsung','oppo','shawmi','Walton'];
// mobilePhone[2]='Walton';
// console.log(mobilePhone);
// console.log(mobilePhone.indexOf('iphone'));

//is lg in array index?
if(mobilePhone.indexOf('lg'==-1)){
    console.log("lg is missing");
}
//checking walton in array index
if(mobilePhone.indexOf('Walton')!=-1){
    console.log("Walton is here");
}

//while loop 
let j=0;
while(j<mobilePhone.length){
    console.log(mobilePhone[j]);
    j++;
}

//for loop
for(let m=0; m<mobilePhone.length; m++){
    console.log(mobilePhone[m]);
}

// function
function addThreeNumbers(a,b,c){
    let total=a+b+c;
    return total;
}
let addition=addThreeNumbers(10,40,50);
console.log("Addition of 3 numbres are :",addition);

//what would be printed in the console?

function getReminder(number1, number2) {
    number1 % number2;
  }
  
  const reminder = getReminder(12, 2);
  
  console.log(reminder)

// // what is the type of “result” in the code snippet given below?
// function addNumber(number1, number2) {
//     return "Result is " + number1 + number2;
//    }
   
//    var result = addNumber(5, 4);
//    console.log(result);


//object

let computer={
    price:30000,
    color:"skyblue",
    ram:"8gb",
    ssd:"125gb",
    monitor:"20inch"

};
console.log(computer);