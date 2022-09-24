// let time='4:50pm';
// let watchPrice=700;
// let isShirtColorWhite=false;

// //array
// let friends=['Lubna','Alisha','Esha','Abir','Kabir'];

// let elementCount = friends.length;
// console.log(elementCount);

// let kabirIndex=friends.indexOf('Kabir');
// console.log(kabirIndex);
// friends.push('Malia');
// console.log(friends);

// console.log(friends.length);
// // array theke specific kaw ke badh dite chaile
// let removed=friends.splice(3,3);// 3num index theke shuru hoye 3 jon k remove kore dibe
// console.log(friends);
// let akJonRemove=friends.splice(1,1);
// console.log(friends);
// //array er sob gulo k print kore dekhabe
// for(let m=0; m<friends.length; m++){
//     console.log(friends[m]);
    
// }

// //condition 

// if(watchPrice < 700){
//     console.log("ami boi kinbo na");
// }
// else{
//     console.log("700 er kom taka tai boi kinbo");
// }

// //loop
// let l=0;
// while(l<5){
//     console.log("I love Bangladesh");
//     l++;
// }

// for( l=0; l<3; l++){
//     console.log("Ai mon ja bole boluk");
// }

//function
 function isMoonUp(time){
    if(time >=19 && time<=24){
        return true;
    }
  return false;
}
let moonStatus= isMoonUp(20);
console.log(moonStatus);

// value of variable could change let
let price=20;
price=33;
price=50;

// value of variable will not change
const myName="Abir";
myName="Akir"; //kora jabe na. ai line wrong hobe.